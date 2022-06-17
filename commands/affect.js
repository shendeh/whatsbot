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
    .affect(image)
    .then(buffer => {
        const RankCard=new MessageMedia("image/png",buffer.toString("base64"),"JokeOverHead.png")
        qm.reply(RankCard);
        // canvacord.write(buffer, "spotify.png");
    });
}else{
    await msg.reply("This feature unlocks at level 2\n\nType *!lvl* for your current level");
  }

};

module.exports = {
    name: 'Affect',
    description: 'No , it doesnt affect my meme',
    command: '!affect',
    commandType: 'plugin',
    isDependent: false,
    help: "*Affect*\n\nReply *!affect* to someone's message",
    execute};
