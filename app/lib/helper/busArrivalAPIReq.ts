const endpointBaseUrl =
  "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2";

export const getBusArrivalApiUrl = (code: string, serviceNo: string) => {
  return `${endpointBaseUrl}?BusStopCode=${code}&ServiceNo=${serviceNo}`;
};

export const busArrivalApiConfig = {
  headers: { AccountKey: process.env.LTA_DATAMALL_API_ACC_KEY! },
};
