import Context from "telegraf/typings/context";
import { getWaitingTime } from "../../lib/apiRequest/getWaitingTime";
import { busData } from "../../lib/data/buses";

type Times = Record<string, number[]>;

export const busCommand = async (ctx: Context) => {
  // get arrival times for all three buses - 231, 232, 235
  const times: Times = {};

  for (const bus of busData) {
    times.serviceNo = (await getWaitingTime(bus.code, bus.serviceNo)) || [];
  }

  console.log(times);

  ctx.reply("yes");

  // logic to pick buses
};
