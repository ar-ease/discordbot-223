import "dotenv/config";
import { Client, ConnectionService, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  console.log(message.content);
  if (message.author.bot) return;
  message.reply({
    content: "hell no",
  });
});
client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.isRepliable();

  // interaction.reply("pong!");
});
client.login(process.env.DISCORD_KEY);
