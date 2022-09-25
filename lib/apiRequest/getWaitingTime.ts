import axios from "axios";
import { APIConfig, generateAPIUrl } from "../helper/busArrivalAPIReq";
import { timeDiff } from "../helper/timeDiff";

export const getWaitingTime = (code: string, serviceNo: string) => {
  axios
    .get(generateAPIUrl(code, serviceNo), APIConfig)
    .then((res) => {
      const waitingTime = getTimeDiff(res.data.Services[0]);
      return waitingTime;
    })
    .catch((e) => console.log(e));
};

const getTimeDiff = (service: any) => {
  const waitingTimes = [];

  for (const key of ["NextBus", "NextBus2", "NextBus3"]) {
    if (key in service) {
      const estimatedArrivalTime = service[key].EstimatedArrival;
      waitingTimes.push(timeDiff(estimatedArrivalTime));
    }
  }
  return waitingTimes;
};
