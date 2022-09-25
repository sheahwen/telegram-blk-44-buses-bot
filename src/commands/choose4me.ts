import Context from "telegraf/typings/context";

export const choose4MeCommand = (ctx: Context) => {
  ctx.reply(`No, ${ctx.from?.first_name}. This feature is still in progress`);
};
