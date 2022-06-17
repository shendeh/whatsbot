const { Buttons } = require("whatsapp-web.js");
const Levels = require("discord-xp");
//jshint esversion:8

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

//feature
console.log(parseInt(data_level));
if(parseInt(data_level)>=2||cmd_user.isMe){

    const chat = await msg.getChat();
    var aoaos= [{id:'customId',body:'!findtags'},{body:'!all'},{body:'Amazing feature'},{body:'button4'}];
    var btn= new Buttons("Tap on any of the buttons below to use those commands",aoaos,"Commonly used commands","The message will be generated from your whatsapp");
    await chat.sendMessage(btn);
}else{
    await msg.reply("This feature unlocks at level 2\n\nType *!lvl* for your current level");
  }

};

module.exports = {
    name: 'B',
    description: 'A quick way to use some commands',
    command: '!b',
    commandType: 'info',
    isDependent: false,
    help: '*B*\n\nType !b and touch any of the buttons on your screen',
    execute};
