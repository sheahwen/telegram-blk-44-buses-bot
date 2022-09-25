import { Telegraf } from "telegraf";
import Context from "telegraf/typings/context";
import { Update } from "telegraf/typings/core/types/typegram";
import { formatArrivalTimes } from "../../lib/controller/formatArrivalTimes";
import { getListOfArrivalTimes } from "../../lib/controller/getListOfArrivalTimes";

export const choose4MeCommand = async (
  ctx: Context,
  bot: Telegraf<Context<Update>>
) => {
  // display all arrival times
  const times = await getListOfArrivalTimes();
  ctx.reply(formatArrivalTimes(times));

  // inline-keyboard
  bot.telegram.sendMessage(ctx.chat?.id!, "Are you in a hurry?", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "YES!!",
            callback_data: "yes",
          },
          {
            text: "no",
            callback_data: "no",
          },
        ],
      ],
    },
  });
};
