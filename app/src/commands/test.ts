import Context from "telegraf/typings/context";

export const testCommand = (ctx: Context) => {
  ctx.reply("Test command is triggered");
};
