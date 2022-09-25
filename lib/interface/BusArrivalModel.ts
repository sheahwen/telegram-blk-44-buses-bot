export interface BusArrivalModel {
  BusStopCode: string;
  Services: BusArrivalServiceModel[];
}

export interface BusArrivalServiceModel {
  ServiceNo: string;
  NextBus?: BusArrivalNextBusModel;
  NextBus2?: BusArrivalNextBusModel;
  NextBus3?: BusArrivalNextBusModel;
}

export interface BusArrivalNextBusModel {
  EstimatedArrival: string;
}
