//jshint esversion:6

const execute = (client,msg) => msg.reply('Ping pong ping');

module.exports = {
    name: 'Ping',
    description: 'Responds with ping pong ping',
    command: '!ping',
    commandType: 'info',
    isDependent: false,
    help: undefined,
    execute};
