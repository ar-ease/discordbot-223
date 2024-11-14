import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];
try {
  const rest  = new REST({ version: "10" }).setToken(process.env.DISCORD_KEY!);

  const cb = async () => {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID!), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  };
  cb();
} catch (error) {
  console.error(error);
}
