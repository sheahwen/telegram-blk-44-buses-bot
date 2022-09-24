import Context from "telegraf/typings/context";
import { getWaitingTime } from "../../lib/apiRequest/getWaitingTime";
import { busData } from "../../lib/data/buses";

export const busCommand = (ctx: Context) => {
  // get arrival times for all 231, 232, 235
  const estimatedTime235 = getWaitingTime(
    busData[0].code,
    busData[0].serviceNo
  );

  // logic to pick buses
};
