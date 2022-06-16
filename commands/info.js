//jshint esversion:8
const execute = async (client,msg/*,args*/) => {
    // const chat= msg.getChat();
    var qm= await msg.getQuotedMessage();
    if(msg.hasQuotedMsg){
    try{
    var info=await msg.getInfo();
    }
    catch(error){
        console.log(console.error());
    }
    // if (info){
    //     await qm.reply(JSON.stringify(info));
    //     await qm.reply(JSON.stringify(info.read));
    // }
    
    const dev=await qm.deviceType;
    
    var score=await qm.forwardingScore;
    score=score.toString();
    await qm.reply("*Message sent from* : "+dev+"\n\n"+"*Forwarded* : "+ score +" times");
    }
};

module.exports = {
    name: 'Info',
    description: 'Get the os and forward count of the message',
    command: '!info',
    commandType: 'info',
    isDependent: false,
    help: '*Info*\n\nType !info while quoting a message to get the device type they are using and the number of times that particular message was forwarded',
    execute};
