const { Client, IntentsBitField, ActivityType } = require("discord.js");

//Here, we use a dotenv file to store our differnt ID's and tokens so it doesn't go out into the public
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

//We make a const of the TOKEN so we can actually make the program run.
const DISCORD_TOKEN = (process.env.TOKEN);

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});
 //This is what prints to the terminal when you run your bot so you know that it's running fine.
client.on("ready", () => {
  console.log("IS READY TO RUMBLE!");
  console.log(`${client.user.tag} IS RUMBLING`);
//This is the activity of the bot that shows up on Discord
  client.user.setActivity({
    name: "Counting the Counts",
    type: ActivityType.Playing,
  });
});
//Here we make a message, so if i say 'hey there' he will respond with 'What's up numbnuts'
client.on('messageCreate', message =>  {

    if(message.content.toLowerCase() === 'hey there')
        message.channel.send("What's up numbnuts");

});

client.login(DISCORD_TOKEN);
