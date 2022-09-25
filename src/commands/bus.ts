import Context from "telegraf/typings/context";
import { formatArrivalTimes } from "../../lib/controller/formatArrivalTimes";
import { getListOfArrivalTimes } from "../../lib/controller/getListOfArrivalTimes";

export const busCommand = async (ctx: Context) => {
  // get arrival times for all three buses - 231, 232, 235
  const times = await getListOfArrivalTimes();
  ctx.reply(formatArrivalTimes(times));

  // logic to pick buses
};
