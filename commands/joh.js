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
if(parseInt(data_level)>=1||cmd_user.isMe){
    const card =canvacord.Canvacord
    // .trash(image)
    .jokeOverHead(image)
    .then(buffer => {
        const RankCard=new MessageMedia("image/png",buffer.toString("base64"),"JokeOverHead.png")
        chat.sendMessage(RankCard);
        // canvacord.write(buffer, "spotify.png");
    });
}else{
    await msg.reply("This feature unlocks at level 1\n\nType *!lvl* for your current level");
  }

};

module.exports = {
    name: 'Joke over head',
    description: 'Joke over head meme',
    command: '!joh',
    commandType: 'plugin',
    isDependent: false,
    help: "*Joke over head*\n\nReply *!joh* to someone's message to make joke over head meme on them",
    execute};
