//jshint esversion:8
const execute = async (client, msg) => {
  if (!msg.to.includes("-")) {
    await msg.reply(`Hey I haven't approved you for personal messaging me yet , my mistress will respond when she comes back online if she wants to\n\nPlease don't spam unless you wish to be blocked and reported\n\nUmm as I have already mentioned above that this is not a right place for you to spam however you ignored that message so I just blocked you\n\nNow you can't do anything until my mistress comes online and unblocks you ! Good bye have a great day ahead`);
    let chat = await msg.getChat();
    let contact = await chat.getContact();
    contact.block();
  }
};

module.exports = {
  name: "Block", //name of the module
  description: "Block current chat", // short description of what this command does
  command: "!block", //command with prefix. Ex command: '!test'
  commandType: "admin", //
  isDependent: false, //whether this command is related/dependent to some other command
  help: "Type !block in the chat to block the user", // a string descring how to use this command Ex = help : 'To use this command type !test arguments'
  execute,
};
