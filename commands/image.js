//jshint esversion:8
const {MessageMedia} = require('whatsapp-web.js');

const execute = async (client,msg) => {
    msg.delete(true);
    let quotedMsg = await msg.getQuotedMessage();
    if (quotedMsg.hasMedia) {
        let attachmentData = await quotedMsg.downloadMedia();
        await client.sendMessage(msg.to, new MessageMedia(attachmentData.mimetype, attachmentData.data, attachmentData.filename), { sendMediaAsImage: true });
    } else {
        await client.sendMessage(msg.to, `*Error*\n\n` + "```No sticker found to make a image```");
    }
};

module.exports = {
    name: 'Image maker',
    description: 'Generates image from sticker',
    command: '!image',
    commandType: 'plugin',
    isDependent: false,
    help: `*Image maker*\n\nCreates image from sticker\n\nReply an sticker with *!image* to get a image`,
    execute};
