import { Times } from "./getListOfArrivalTimes";

export const formatArrivalTimes = (data: Times): string => {
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
