import { Client } from "discord.js-light";
import ClientOptions from "./ClientOptions";

export default class YuruClient extends Client {
  public constructor(ClientOption?: ClientOptions) {
    super(ClientOption);
  }
}
