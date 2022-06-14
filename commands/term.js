//jshint esversion:8

const { exec } = require('child_process');

const execute = async (client,msg,args) => {
    msg.delete(true);
    exec("cd public && " + args.join(' '), async (error, stdout, stderr) => {
        if (error) {
            await client.sendMessage(msg.to, "*whatsbot~:* ```" + error + "```");
        } else if (stderr) {
            await client.sendMessage(msg.to, "*whatsbot~:* ```" + stderr + "```");
        } else {
            await client.sendMessage(msg.to, "*whatsbot~:* ```" + stdout + "```");
        }
    });
};

module.exports = {
    name: 'Terminal',
    description: 'Use teminal remotely',
    command: '!term',
    commandType: 'plugin',
    isDependent: false,
    help: '*Terminal*\n\nYou can execute any command with this by default it will run from public directory ! If you are leeching something it will be available publicly at\n\n_http://[Your-App-Url]/public_\n\n*!term [command]*\nTo execute a command\n\nEx : ```!term cd ./temp/```',
    execute};
