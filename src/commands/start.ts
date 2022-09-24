import Context from "telegraf/typings/context";

export const startCommand = (ctx: Context) => {
  ctx.reply("Start command is triggered");
};
