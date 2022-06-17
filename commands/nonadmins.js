//jshint esversion:8
const Levels = require("discord-xp");
const execute = async (client, msg, args) => {
  //discord-xp
  var cmd_user = await msg.getContact();
  if (!cmd_user.isMe) {
    try {
      const data = await Levels.fetch(cmd_user.id.user, "Global", false);
      var data_level = data.level;
      console.log("discord-xp");
      console.log(data_level);
    } catch (error) {
      console.log(error);
    }
  }

  //feature
  console.log(parseInt(data_level));
  if (parseInt(data_level) >= 2 || cmd_user.isMe) {
    const chat = await msg.getChat();

    let contact1 = await msg.getContact();
    if (contact1.isMyContact || contact1.isMe) {
      let text = `@${contact1.id.user} *MENTIONED EVERYONE*`;
      // await msg.reply(JSON.stringify(contact1));
      let mentions = [];

      for (let participant of chat.participants) {
        if (!participant.isAdmin && !participant.isSuperAdmin) {
          const contact = await client.getContactById(
            participant.id._serialized
          );

          mentions.push(contact);
        }
        // text += `@${participant.id.user} `;
      }
      mentions.push(cmd_user);
      // await chat.sendMessage(text + `\n\n*This message is automated by whats because of !everyone command*`, { mentions });
      if (args.length) {
        let message = args.join(" ");
        await chat.sendMessage("```" + message + "```", { mentions });
      } else {
        await chat.sendMessage(
          text +
            `\n\nThis message is automated by whats because of !na command`,
          { mentions }
        );
      }
    } else {
      await msg.reply("*Whats has revoked your access to this command*");
    }
  } else {
    await msg.reply(
      "This feature unlocks at level 2\n\nType *!lvl* for your current level"
    );
  }
};

module.exports = {
  name: "Non admins",
  description: "Tags non-admins in a group",
  command: "!na", 
  commandType: "info", 
  isDependent: false, 
  help: "*Non admins*\n\nType !na in the chat to tag all non-admin group members",
  execute,
