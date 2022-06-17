const { Buttons, List } = require("whatsapp-web.js");
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

    var aoaos= [{id:'customId',body:'!NumbersGame'},{body:'!RiddlesGame'},{body:'I have an idea for the 3rd game'},{body:'button4'}];
    // await client.sendMessage(msg.to,"chlra h");
    var list_section=[{title:'List of games',rows:[{id:'customId', title:'!NumbersGame', description: 'Whats will pick a number between 1 to 100 and you have to guess it!'},{title:'!RiddlesGame', description: 'SciBot will send a riddle and you have to solve it!'},{title:'Next Game', description: 'If you have an idea for the next game that can be created in Whatsapp\nLet me know'}]}];
    var list=new List("```Don't start 2 games at a time\n\nUse !stop to stop the game```","Games",list_section,"*Which game would you like to play ?*","footer");
    var btn= new Buttons("Tap on any of the buttons below to play that game",aoaos,"Which game would you like to start ?","Don't start 2 games at a time");
    
    // await chat.sendMessage(btn);
    await chat.sendMessage(list);
}else{
    await msg.reply("This feature unlocks at level 2\n\nType *!lvl* for our current level");
  }
};

module.exports = {
    name: 'Play',
    description: 'A quick way to play some games',
    command: '!play',
    commandType: 'info',
    isDependent: false,
    help: '*Play*\n\nType !play and touch any of the buttons on your screen',
    execute};
