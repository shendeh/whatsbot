//jshint esversion:8
const fs = require("fs");
const path = require("path");
const { search } = require("../helpers/song");

const execute = async (client, msg, args) => {
  msg.delete(true);
  let getdata = await search(args.join(" "));
  let sendmessage = await client.sendMessage(msg.to, getdata.content); // have to grab the message ID
  if (getdata.status) {
    fs.writeFileSync(
      path.join(__dirname, `../cache/song~${sendmessage.id.id}.json`),
      JSON.stringify(getdata.songarray)
    );
  }
};

module.exports = {
  name: "Song",
  description: "Search songs on jiosaavn",
  command: "!song",
  commandType: "plugin",
  isDependent: false,
  help: `*Song*\n\nSearch a song and download it\n\n*!song [search-query]*\n\nEx : !song makhna\n\nThen reply the message with *!dldsong [id]*\nEx : !dldsong 1`,
  execute,
};
