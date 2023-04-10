import { busData } from "../data/buses";
import { getWaitingTime } from "./getWaitingTime";

export type Times = Record<string, number[]>;

export const getListOfArrivalTimes = async () => {
  const times: Times = {};

  for (const bus of busData) {
    times[bus.serviceNo] =
      (await getWaitingTime(bus.code, bus.serviceNo)) || [];
  }

  return times;
};
