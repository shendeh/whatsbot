//jshint esversion:8
const config = require("../config");
const pmpermit = require("../helpers/pmpermit");

const execute = async (client, msg) => {
  if (config.pmpermit_enabled == "true" && !msg.to.includes("-")) {
    await pmpermit.nopermit(msg.to.split("@")[0]);
    msg.reply("You are not allowed to pm me"); // don't change this text without discussion with Tuhin
  }
};

module.exports = {
  name: "Disallow", //name of the module
  description: "Disallow an allowed user for personal messaging", // short description of what this command does
  command: "!nopm", //command with prefix. Ex command: '!test'
  commandType: "admin", //
  isDependent: false, //whether this command is related/dependent to some other command
  help: "Type !nopm in the chat to execute", // a string descring how to use this command Ex = help : 'To use this command type !test arguments'
  execute,
};
