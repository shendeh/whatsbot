//jshint esversion:8
// var MongoClient = require('mongodb').MongoClient;
// var url="mongodb+srv://Devansh:DevIsNona@cluster0.1swkf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const database = require("../db");
const Levels = require("discord-xp");

// const fs = require("fs");
// const path = require("path");
// const database = require("../db");
// const pmpermit = require("../helpers/pmpermit");
const execute = async (client,msg/*,args*/) => {

  //discord-xp
  var cmd_user=await msg.getContact();
  if(!cmd_user.isMe){
  try{
    const data =await Levels.fetch(cmd_user.id.user, "Global", false);
  var data_level=data.level
  console.log("discord-xp");
  console.log(data_level);
  }
  catch(error){
      console.log(error);
  }
}


    //feature
    console.log(parseInt(data_level));
    if(parseInt(data_level)>=1||cmd_user.isMe){
  function syncDelay(milliseconds) {
    var start = new Date().getTime();
    var end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
} 

  syncDelay(1000);
    const chat = await msg.getChat();
    const contact = await msg.getContact();
    // var id=contact.id.user;
    var has_tags=false;
    await chat.sendMessage("Please wait");
    var extracted_array;
    var extracted_msg="";
    var overall_msg="*Messages you were tagged in*\n\n";
    var contact1=await msg.getContact();
      var user_id=contact1.id.user;
    //   await chat.sendMessage(user_id)
    var persons=[];
    try{
      var { conn, coll } = await database("TaggedMessages");
      syncDelay(1000);
    }
    catch (error){
      await chat.sendMessage("This feature won't work until next month");
    }
      if(!cmd_user.isMe){
      var query = { number: user_id };
      }
      else if(cmd_user.isMe){
        var query={number:"917042053980"}
      }
      coll.find(query).toArray(function(err, result) {
          if (err) throw err;
          // console.log(result[0].message);
          // extracted_msg=result[0].message;
          extracted_array=result;
          conn.close();
        });
        // await chat.sendMessage(user_id);
        await chat.sendMessage("Searching for your tags");
        syncDelay(1000);
        var size=extracted_array.length;
        var message_idx=1;
        for(let i=size-1;i>=0;i--){
          try{

            user_id_string=user_id.toString();
            user_id_string=user_id_string;
            if(user_id_string!="917042053980"){
            var tag_replaced_msg=extracted_array[i].message.replace(user_id_string,extracted_array[i].TaggedOne);
            }
            else if(user_id_string=="917042053980"){
              var tag_replaced_msg=extracted_array[i].message.replace(user_id_string, "Yuki");
            }



            if(chat.id._serialized==extracted_array[i].Chat){
            extracted_msg="*Message* "+"*"+message_idx+"*"+" *:* "+tag_replaced_msg + "      *Tagged by* : "+extracted_array[i].Tagged_By+"\n";
            extracted_msg+="---------------------------------------------------------\n";
            message_idx=message_idx+1;
            }else{
              continue;
            }
            overall_msg+=extracted_msg; 
            has_tags=true;
          }
          catch (error){
            console.log(error);
            overall_msg="Error , please notify whats about this";
            break;
          }
          
        }
        if(!overall_msg.includes("_-Tagged By_* : ")){
          await chat.sendMessage("*Messages you were tagged in*\n\n"+"Looks like no one has tagged you yet");
        }
        else{
 
        await chat.sendMessage(overall_msg);
        }
      }else{
        await msg.reply("This feature unlocks at level 1\n\nType *!lvl* for your current level");
      }
};

module.exports = {
    name: 'Findtags', //name of the module
    description: 'Sends all the messages you have been tagged in for the day', // short description of what this command does
    command: '!findtags',
    commandType: 'info',
    isDependent: true,
    help: '*Find tags*\n\nJust use !findtags to find the list of all the messages you have been tagged in for the chat it is used in\n\nTry using !ib',
    execute};
