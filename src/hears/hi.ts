import Context from "telegraf/typings/context";

export const hearsHi = (ctx: Context) => {
  ctx.reply(`Hi, ${ctx.from?.first_name}`);
};
