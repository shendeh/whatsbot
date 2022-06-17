//jshint esversion:8
const { Order } = require("whatsapp-web.js");
const execute = async (client,msg/*,args*/) => {
    const chat = await msg.getChat();
    var O=new Order();
    O.currency="rupees";
    await chat.sendMessage(O); 
};

module.exports = {
    name: 'Play',
    description: 'A quick way to play some games',
    command: '!play',
    commandType: 'abcd',
    isDependent: false,
    help: '*Play*\n\nType !play and touch any of the buttons on your screen',
    execute};
