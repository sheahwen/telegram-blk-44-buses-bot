import Context from "telegraf/typings/context";

export const helpCommand = (ctx: Context) => {
  ctx.reply("Help command is triggered");
};
