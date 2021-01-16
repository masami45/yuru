import discord from "discord.js";

declare module "discord.js-light" {
  export interface ClientOptions extends discord.ClientOptions {
    readonly commandPath?: string;
    readonly eventPath?: string;
  }
}
