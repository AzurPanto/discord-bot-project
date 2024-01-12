const { Client, IntentsBitField, ActivityType } = require("discord.js");

require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

const DISCORD_TOKEN = (process.env.TOKEN);

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("IS READY TO RUMBLE!");
  console.log(`${client.user.tag} IS RUMBLING`);

  client.user.setActivity({
    name: "Counting the Counts",
    type: ActivityType.Playing,
  });
});

client.on('messageCreate', message =>  {

    if(message.content.toLowerCase() === 'hey there')
        message.channel.send("What's up numbnuts");

});

client.on('messageCreate', message =>{

  if(message.content.toLowerCase() === 'hey, im not a numbnut')
  message.channel.send("yes you are, numbnut");
});

client.login(DISCORD_TOKEN);
