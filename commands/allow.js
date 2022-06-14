//jshint esversion:8
const config = require("../config");
const pmpermit = require("../helpers/pmpermit");

const execute = async (client, msg) => {
  if (config.pmpermit_enabled == "true" && !msg.to.includes("-")) {
    await pmpermit.permit(msg.to.split("@")[0]);
    msg.reply("You are allowed to pm me");
  }
};

module.exports = {
  name: "Allow",
  description: "Allow personal messaging for a contact",
  command: "!allow",
  commandType: "admin",
  isDependent: false,
  help: `You can allow him for pm by these commands\n\n*!allow* - Allow an user to pm you\n\n*!nopm* - Disallow an allowed user to pm you`, // a string descring how to use this command Ex = help : 'To use this command type !test arguments'
  execute,
};
