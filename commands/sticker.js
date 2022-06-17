//jshint esversion:8
const {MessageMedia} = require('whatsapp-web.js');

const execute = async (client,msg) => {
    msg.delete(true);
    let quotedMsg = await msg.getQuotedMessage();
    if (quotedMsg.hasMedia) {
        let attachmentData = await quotedMsg.downloadMedia();
        await client.sendMessage(msg.to, new MessageMedia(attachmentData.mimetype, attachmentData.data, attachmentData.filename), { sendMediaAsSticker: true });
    } else {
        await client.sendMessage(msg.to, `*Error*\n\n` + "```No image found to make a sticker```");
    }
};

module.exports = {
    name: 'Sticker maker',
    description: 'Generates sticker from image',
    command: '!sticker',
    commandType: 'plugin',
    isDependent: false,
    help: `*Sticker maker*\n\nCreates sticker from image\n\nReply an image with *!sticker* to get a sticker of that image`,
    execute};
