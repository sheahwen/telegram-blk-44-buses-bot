import Context from "telegraf/typings/context";
import { listOfCommandsMsg } from "../../lib/constant/replyMessages";

export const helpCommand = (ctx: Context) => {
  ctx.reply(listOfCommandsMsg);
};
