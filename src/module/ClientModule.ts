import { Client, ClientOptions } from "discord.js-light";

export default class YuruClient extends Client {
  public readonly eventPath?: string;
  public readonly commandPath?: string;

  public constructor(opt?: ClientOptions) {
    super(opt);

    this.eventPath = opt?.eventPath;
    this.commandPath = opt?.commandPath;
  }

}
