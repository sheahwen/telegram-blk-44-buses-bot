import Context from "telegraf/typings/context";
import { formatArrivalTimes } from "../../lib/controller/formatArrivalTimes";
import { getListOfArrivalTimes } from "../../lib/controller/getListOfArrivalTimes";

export const choose4MeCommand = async (ctx: Context) => {
  ctx.reply(`Ok! Here you go!`);

  // display all arrival times
  const times = await getListOfArrivalTimes();
  ctx.reply(formatArrivalTimes(times));
};
