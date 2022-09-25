import Context from "telegraf/typings/context";
import { listOfCommandsMsg } from "../../lib/constant/replyMessages";

export const startCommand = (ctx: Context) => {
  ctx.reply("Hi I am your bus assistant");
  ctx.reply(listOfCommandsMsg);
};
