//jshint esversion:6

const execute = (client,msg) => msg.reply('Sensei : Yuki\n\nPowered by whats');

module.exports = {
    name: 'Ping',
    description: 'Responds with sensei',
    command: '!ping',
    commandType: 'info',
    isDependent: false,
    help: undefined,
    execute};
