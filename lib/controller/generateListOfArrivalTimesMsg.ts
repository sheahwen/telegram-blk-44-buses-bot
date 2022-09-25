import { busData } from "../data/buses";
import { getWaitingTime } from "./getWaitingTime";

export type Times = Record<string, number[]>;

export const generateListOfArrivalTimesMsg = async () => {
  const times: Times = {};

  for (const bus of busData) {
    times[bus.serviceNo] =
      (await getWaitingTime(bus.code, bus.serviceNo)) || [];
  }

  return formatMessage(times);
};

export const formatMessage = (data: Times): string => {
  let str = "Arrival times\n";

  for (const [key, value] of Object.entries(data)) {
    str += `${key}: ${parseArray(value)}\n`;
  }
  return str;
};

const parseArray = (arr: number[]): string => {
  let str = "";
  for (const minutes of arr) {
    str += minutes.toString().padStart(2, "0") + "min  ";
  }
  return str;
};
