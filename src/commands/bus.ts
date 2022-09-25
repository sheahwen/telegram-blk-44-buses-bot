import Context from "telegraf/typings/context";
import { formatMessage } from "../../lib/controller/formatMessage";
import { getWaitingTime } from "../../lib/controller/getWaitingTime";
import { busData } from "../../lib/data/buses";

export type Times = Record<string, number[]>;

export const busCommand = async (ctx: Context) => {
  // get arrival times for all three buses - 231, 232, 235
  const times: Times = {};

  for (const bus of busData) {
    times[bus.serviceNo] =
      (await getWaitingTime(bus.code, bus.serviceNo)) || [];
  }

  ctx.reply(formatMessage(times));

  // logic to pick buses
};
