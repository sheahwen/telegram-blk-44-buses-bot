import axios, { AxiosResponse } from "axios";
import { timeDiff } from "../helper/timeDiff";
import {
  busArrivalApiConfig,
  getBusArrivalApiUrl,
} from "../helper/busArrivalAPIReq";
import {
  BusArrivalModel,
  BusArrivalServiceModel,
} from "../interface/BusArrivalModel";

interface Response extends AxiosResponse {
  data: BusArrivalModel;
}

/**
 * parse estimated arrival time of upcoming buses into an array of seconds
 */
export const getWaitingTime = async (
  code: string,
  serviceNo: string
): Promise<number[]> => {
  try {
    const res: Response = await axios(
      getBusArrivalApiUrl(code, serviceNo),
      busArrivalApiConfig
    );
    const waitingTime = getTimeDiff(res.data.Services[0]);
    return waitingTime;
  } catch (e) {
    return [];
  }
};

const getTimeDiff = (service: BusArrivalServiceModel): number[] => {
  const waitingTime = [];

  const nextBuses = new Set<"NextBus" | "NextBus2" | "NextBus3">([
    "NextBus",
    "NextBus2",
    "NextBus3",
  ]);

  for (const key of nextBuses) {
    if (key in service) {
      const estimatedArrivalTime = service[key]!.EstimatedArrival;
      waitingTime.push(timeDiff(estimatedArrivalTime));
    }
  }

  return waitingTime;
};
