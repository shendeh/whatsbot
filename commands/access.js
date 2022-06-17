//jshint esversion:8
const Levels = require("discord-xp");
const { MessageMedia } = require("whatsapp-web.js");
const path = require("path");
const execute = async (client,msg/*,args*/) => {
    const chat= await msg.getChat();

    var cmd_user=await msg.getContact();
if(!cmd_user.isMe){
try{
const data =await Levels.fetch(cmd_user.id.user, "Global", false);
var data_level=data.level
console.log("discord-xp");
console.log(data_level);
}
catch(error){
    console.log(error);
}
}
// var level=parseInt(data_level);
if(parseInt(data_level)<=4){
var img="lvl"+data_level+".png";
const media=MessageMedia.fromFilePath(path.join(__dirname, `.//${img}`));
await chat.sendMessage(media);
}
else{
    data_level="4";
    var img="lvl"+data_level+".png";
    const media=MessageMedia.fromFilePath(path.join(__dirname, `.//${img}`));
    await chat.sendMessage(media);
}
    
};

module.exports = {
    name: 'Access',
    description: 'Shows all the commands you have access to at your current level',
    command: '!access',
    commandType: 'info',
    isDependent: false,
    help: '*Access*\n\nType !access',
    execute};
