import axios from "axios";
import { APIConfig, generateAPIUrl } from "../helper/busArrivalAPIReq";

export const getArrivalTime = (code: string, serviceNo: string) => {
  axios
    .get(generateAPIUrl(code, serviceNo), APIConfig)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
};
