import Context from "telegraf/typings/context";

export const hearsChoose4Me = (ctx: Context) => {
  ctx.reply(`No, ${ctx.from?.first_name}. This feature is still in progress`);
};
