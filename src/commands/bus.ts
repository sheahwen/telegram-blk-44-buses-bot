import Context from "telegraf/typings/context";
import { getArrivalTime } from "../../lib/apiRequest/getArrivalTimes";
import { busData } from "../../lib/data/buses";

export const busCommand = (ctx: Context) => {
  // get arrival times for all 231, 232, 235
  const bus231 = getArrivalTime(busData[0].code, busData[0].serviceNo);

  // logic to pick buses
};
