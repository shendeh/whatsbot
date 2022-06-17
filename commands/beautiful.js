const Levels = require("discord-xp");
const canvacord = require("canvacord");
const { MessageMedia } = require("whatsapp-web.js");

const execute = async (client,msg/*,args*/) => {

//discord-xp
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
const qm=await msg.getQuotedMessage();
const qm_Contact=await qm.getContact();
const image=await qm_Contact.getProfilePicUrl();
//feature
const chat= await msg.getChat();
console.log(parseInt(data_level));
if(parseInt(data_level)>=2||cmd_user.isMe){
    const card =canvacord.Canvacord
    // .trash(image)
    .beautiful(image)
    .then(buffer => {
        const RankCard=new MessageMedia("image/png",buffer.toString("base64"),"beautiful.png")
        qm.reply(RankCard);
        // canvacord.write(buffer, "spotify.png");
    });
}else{
    await msg.reply("This feature unlocks at level 2\n\nType *!lvl* for your current level");
  }

};

module.exports = {
    name: 'Beautful',
    description: 'Oh this ? This is a beautiful meme',
    command: '!beautiful',
    commandType: 'plugin',
    isDependent: false,
    help: "*Beautiful*\n\nReply *!beautiful* to someone's message",
    execute};
