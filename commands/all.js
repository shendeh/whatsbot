//jshint esversion:8
const Levels = require("discord-xp");
const execute = async (client,msg,args) => {
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
      
      let contact1=await msg.getContact();
      if(contact1.isMyContact || contact1.isMe){
        
          
        let text = `@${contact1.id.user} *MENTIONED EVERYONE*`;
        // await msg.reply(JSON.stringify(contact1));
        let mentions = [];
  
        for(let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized); 
             
            mentions.push(contact);
            // text += `@${participant.id.user} `;
        }
  
        // await chat.sendMessage(text + `\n\n*This Message is Automated by SciBot Because of !everyone command*`, { mentions });
        if(args.length){
          let message =args.join(" ");
          await chat.sendMessage("```"+message+"```", { mentions });
        }else{
        await chat.sendMessage(text +`\n\nThis message is automated by whats because of !all command`, { mentions });
        }
      
    }
    else{
      await msg.reply("*Whats has revoked your access to this command*");
    }

  }else{
    await msg.reply("This feature unlocks at level 2\n\nType *!lvl* for your current level");
  }

  }; 
      
    module.exports = {
      name: "All",
      description: "Tags everyone in a group",
      command: "!all",
      commandType: "admin",
      isDependent: false,
      help: '*All*\n\nType !all in the chat to tag all group members',
      execute,
    };
