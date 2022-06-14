//jshint esversion:8
const {MessageMedia} = require('whatsapp-web.js');
const qr = require('qr-image');

async function qrgen(text) {

    const data = ({
        mimetype: "image/png",
        data: await (qr.imageSync(text, { type: 'png' }).toString('base64')),
        filename: text + ".png"
    });
    return data;
}

const execute = async (client,msg,args) => {

    let data;
    msg.delete(true);

    if(msg.hasQuotedMsg) {
        let quotedMsg = await msg.getQuotedMessage();
        data = await qrgen(quotedMsg.body);
        msg = quotedMsg;
    }
    else {
        data = await qrgen(args.join(' '));
    }
    
    await client.sendMessage(msg.to, new MessageMedia(data.mimetype, data.data, data.filename), { Caption : `Qr code for\n\n` + "```" + msg.body + "```" });
};

module.exports = {
    name: 'Qr generator',
    description: 'Generates qr for given text',
    command: '!qr',
    commandType: 'plugin',
    isDependent: false,
    help: '`*Qr generator*\n\nGenerate qr code with this module ! Just send the text it will generate qr code image for you\n\n*!qr [Text]*\n\nor\nReply a message with *!qr* to create`',
    execute};
