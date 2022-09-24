import { endpointBaseUrl } from "../constants/busArrivalAPI";

export const generateAPIUrl = (code: string, serviceNo: string) => {
  return `${endpointBaseUrl}?BusStopCode=${code}&ServiceNo=${serviceNo}`;
};
