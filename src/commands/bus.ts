import axios from "axios";
import Context from "telegraf/typings/context";
import { busData } from "../../lib/data/buses";
import { APIConfig, generateAPIUrl } from "../../lib/helper/busArrivalAPIReq";

export const busCommand = (ctx: Context) => {
  axios
    .get(generateAPIUrl(busData[0].code, busData[0].serviceNo), APIConfig)
    .then((res) => {
      console.log(res.data);
      ctx.reply("235");
    })
    .catch((e) => console.log(e));
};
