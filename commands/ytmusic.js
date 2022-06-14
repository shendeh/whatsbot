//jshint esversion:8
const { MessageMedia } = require("whatsapp-web.js");
const axios = require("axios");
const formatNum = require("../helpers/formatNum");
const processImage = require("../helpers/processImage");
const { getShortURL } = require("../commands/shorten");

async function youtube(url) {
  try {
    let data = (
      await axios.get(`https://yoothoob.vercel.app/fromLink?link=${url}`)
    ).data;
    let shortUrl = await getShortURL(data.assets.mp3);
    return {
      title: data.title,
      likes: formatNum(data.stats.likes),
      views: formatNum(data.stats.views),
      comments: formatNum(data.stats.comments),
      image: await processImage(
        data.images[3] ||
          data.images[2] ||
          data.images[1] ||
          data.images[0] ||
          null
      ),
      download_link: shortUrl === "error" ? data.assets.mp3 : shortUrl.short,
    };
  } catch (error) {
    return "error";
  }
}

const execute = async (client,msg,args) => {

    let data;

    msg.delete(true);

    if(msg.hasQuotedMsg) {
        let quotedMsg = await msg.getQuotedMessage();
        data = await youtube(quotedMsg.body);
    }
    else {
        data = await youtube(args[0]);
    }

    if (data == "error") {
        await client.sendMessage(msg.to, `*Error*\n\n` + "```Something unexpected happened to fetch the youyube video```");
    } else {
        await client.sendMessage(msg.to, new MessageMedia(data.image.mimetype, data.image.data, data.image.filename), { Caption : `*${data.title}*\n\nViews: ` + "```" + data.views + "```\nLikes : " + "```" + data.likes + "```\nComments : " + "```" + data.comments + "```\n\n*Download mp3*\n" + "```" + data.download_link + "```" });
    }
};

module.exports = {
  name: "Youtube music",
  description: "Download mp3 from a youtube link",
  command: "!ytmusic",
  commandType: "plugin",
  isDependent: false,
  help: `*Youtube music*\n\nDownload mp3 from a youtube link with this command\n\n*!ytmusic [Youtube-Link]*\n\nor\n\nReply a youtube link with *!ytmusic*`,
  execute,
};
