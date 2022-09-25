import { Times } from "../../src/commands/bus";
import { secondToMinRoundedDown } from "../helper/secondToMin";

export const formatMessage = (data: Times): string => {
  let str = "Arrival times\n";

  for (const [key, value] of Object.entries(data)) {
    str += `${key}: ${parseArray(value)}\n`;
  }
  return str;
};

const parseArray = (arr: number[]): string => {
  let str = "";
  for (const seconds of arr) {
    str +=
      secondToMinRoundedDown(seconds).toString().padStart(2, "0") + "min  ";
  }
  return str;
};
