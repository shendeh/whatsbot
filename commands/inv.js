//jshint esversion:8
const execute = async (client,msg/*,args*/) => {
    const chat= await msg.getChat();
    if(chat.isGroup){
        const inv = await chat.getInviteCode();
        await chat.sendMessage("*Here's the group invite link*\n\n"+"https://chat.whatsapp.com/"+inv+"\n\n"+"This message is automated by whats");

    }
};

module.exports = {
    name: 'inv',
    description: 'Get the group invite link',
    command: '!inv',
    commandType: 'admin',
    isDependent: false,
    help: '*Inv*\n\nType !inv to get the group invite link',
    execute};
