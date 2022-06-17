//jshint esversion:8
const Levels = require("discord-xp");
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
if(parseInt(data_level)>=3||cmd_user.isMe){

    const chat = await msg.getChat();
    if(msg.hasQuotedMsg){
        var user=await msg.getContact();
        // var me = await client.getContactById("917042053980@c.us");
        // if(user.id._serialized=="919324708043@c.us" || msg.fromMe){
        var qm=await msg.getQuotedMessage();
        const contact= await qm.getContact();
        var arr=[contact.id._serialized];
        // await chat.sendMessage(JSON.stringify(contact));
        // console.log(JSON.stringify(me));

        var user_admin=false;
        var me_admin=false;
        for(let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            if(contact.isMe){
                if(user.id._serialized==contact.id._serialized && participant.isAdmin){
                    user_admin=true;
                }
                if(participant.isAdmin||participant.isSuperAdmin){
                    me_admin=true;
                    
                    break;
                }
                
                else{
                    await chat.sendMessage("Whats isn't the admin of this group");
                    break;
                }
            }
            else if(user.id._serialized==contact.id._serialized && participant.isAdmin){
                user_admin=true;
            }
            
            
        }


        
        // if(me.isAdmin||me.isSuperAdmin){
        //     me_admin=true;
        // }
        console.log(me_admin);
        if(!qm.fromMe && arr.length==1 && !contact.isSuperAdmin && me_admin==true&&user_admin==true){
        chat.removeParticipants(arr);
        }
        if(user_admin==false){
            await chat.sendMessage("You are not the admin of this group");
        }
        
    }
}else{
    await msg.reply("This feature unlocks at level 3\n\nType *!lvl* for your current level");
  }

};

module.exports = {
    name: 'Kick',
    description: 'Remove someone from the group',
    command: '!kick',
    commandType: 'admin',
    isDependent: false,
    help: '*Kick*\n\nJust use !kick while quoting the message of someone you want to remove',
    execute};
