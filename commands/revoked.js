const Levels = require("discord-xp");
const pmpermit = require("../helpers/pmpermit");
const execute = async (client, msg/*,args*/) => {
   
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
    if (chat.isGroup) {

        var contact = await msg.getContact();
        console.log("\n\n");
        console.log(JSON.stringify(contact));
        var contact_admin=false;
        for(let participant of chat.participants) {
            // const contact = await client.getContactById(participant.id._serialized);
            if(participant.id._serialized==contact.id._serialized){
                if(participant.isAdmin||participant.isSuperAdmin){
                    contact_admin=true;
                    console.log(contact_admin);
                    break;
                }
                else{
                    await msg.reply("Only the group admins of this group can control the deleted messages");
                    break;
                }
            }
            
        }



        if (contact_admin||contact.isMe) {
            
            var user_id = contact.pushname;
            var chat_id = chat.id._serialized;
            const person = await msg.getMentions();
            var value = true;
            if (msg.body.toLowerCase().includes("false")) {
                value = false;
            }
            else if (msg.body.toLowerCase().includes("true")) {
                value = true;
            }

            if (contact.id.user == "917869764541") {
                user_id = "Yuki";
            }

            let val = await pmpermit.msg_del(chat.id._serialized, person[0].id._serialized, value);
            if (value == true) {
                await chat.sendMessage("All deleted text messages will be shown");
            }
            else if (value == false) {
                await chat.sendMessage("No deleted text messages will be shown");
            }
        }

    }
}else{
    await msg.reply("This feature unlocks at level 3\n\nType *!lvl* for your current level");
  }


};

module.exports = {
    name: 'Revoked',
    description: 'Control deleted messages of members of a group',
    command: '!revoked',
    commandType: 'admin',
    isDependent: false,
    help: '*Revoked*\n\nUse this to configure if the bot should display the deleted messages of a specific person or not\n\nUsage example\n"!revoked @Yuki true"\n"!revoked @Yuki false"',
    execute
};
