import Context from "telegraf/typings/context";
import { generateListOfArrivalTimesMsg } from "../../lib/controller/generateListOfArrivalTimesMsg";

export const busCommand = async (ctx: Context) => {
  // get arrival times for all three buses - 231, 232, 235
  ctx.reply(await generateListOfArrivalTimesMsg());

  // logic to pick buses
};
