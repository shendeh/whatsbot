//jshint esversion:6

const execute = (client,msg) => msg.reply('Pong\n\nPowered by whats');

module.exports = {
    name: 'Ping',
    description: 'Responds with pong',
    command: '!ping',
    commandType: 'info',
    isDependent: false,
    help: undefined,
    execute};
