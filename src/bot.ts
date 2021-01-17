import "dotenv/config";
import { Message } from "discord.js";
import YuruClient from "./module/ClientModule";

const client = new YuruClient({
  cacheChannels: true,
  fetchAllMembers: true,
  disabledEvents: ["GUILD_SYNC", "PRESENCE_UPDATE", "TYPING_START"]
});

client.on("message", async(msg: Message) => {
  if (msg.content == "!ping") {
    msg.channel.send("Pong!");
  }
});

client.login(process.env.DISCORD_TOKEN);
