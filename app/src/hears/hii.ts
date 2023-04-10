import Context from "telegraf/typings/context";

export const hearsHii = (ctx: Context) => {
  ctx.reply(`Hii, ${ctx.from?.first_name}`);
};
