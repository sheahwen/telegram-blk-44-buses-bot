import Context from "telegraf/typings/context";

export const onText = (ctx: Context) => {
  ctx.reply("Text message received");
};
