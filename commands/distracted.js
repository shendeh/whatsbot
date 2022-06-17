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
const mentions=await msg.getMentions();
console.log(JSON.stringify(mentions[0]));
const img1=await mentions[0].getProfilePicUrl();
console.log(JSON.stringify(img1));
const img2= await mentions[1].getProfilePicUrl();
const img3=await mentions[2].getProfilePicUrl();

// const qm=await msg.getQuotedMessage();
// const qm_Contact=await qm.getContact();
// const image=await qm_Contact.getProfilePicUrl();
//feature
const chat= await msg.getChat();
console.log(parseInt(data_level));
if(parseInt(data_level)>=2||cmd_user.isMe){
    const card =canvacord.Canvacord
    // .trash(image)
    .distracted(img1,img2,img3)
    .then(buffer => {
        console.log("sending...");
        const RankCard=new MessageMedia("image/png",buffer.toString("base64"),"JokeOverHead.png")
        chat.sendMessage(RankCard);
        // canvacord.write(buffer, "spotify.png");
    });
}else{
    await msg.reply("This feature unlocks at level 2\n\nType *!lvl* for your current level");
  }
  console.log("Sent");
};

module.exports = {
    name: 'Distracted',
    description: 'Distracted guy meme',
    command: '!distracted',
    commandType: 'plugin',
    isDependent: false,
    help: "*Distracted*\n\nType *!distracted* followed by 3 tags ( Girl , boy , the other girl )",
    execute};
