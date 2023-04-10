import Context from "telegraf/typings/context";
import { getListOfArrivalTimes } from "../../lib/controller/getListOfArrivalTimes";

export const choose4MeCb = async (ctx: Context, type: "yes" | "no") => {
  // get arrival times for all three buses - 231, 232, 235
  const times = await getListOfArrivalTimes();

  // logic to pick buses

  // 0. If all null, inform user
  // 1. If 235 is coming in 4 or 5 minutes
  // 2. If 231 is coming in 6 minutes
  // 3. If 231 & 235 earliest available are > 10min and 232 < 7, take 232
  // 4. If 235 > 231 by 2, take 231. Else, 235
  const availableTiming235 = times["235"].filter((time) => time > 4);
  const availableTiming231 = times["231"].filter((time) => time > 5);
  const availableTiming232 = times["232"].filter((time) => time > 5);

  const isAvailable235 = availableTiming235.length > 0;
  const isAvailable231 = availableTiming231.length > 0;
  const isAvailable232 = availableTiming232.length > 0;

  if (
    times["235"].length === 0 &&
    times["231"].length === 0 &&
    times["232"].length === 0
  )
    ctx.reply("There is no service now zzz...");
  else if (times["235"].includes(4) || times["235"].includes(5))
    ctx.reply(
      "Best choice is bus 235 - the fastest route and low risk of missing the bus"
    );
  else if (times["231"].includes(6))
    ctx.reply(
      "Best choice is bus 231 - the fastest route with less stops and traffic lights"
    );
  else if (isAvailable235 && !isAvailable235 && !isAvailable235)
    ctx.reply("Too late le... ");
  else if (
    isAvailable235 &&
    availableTiming235[0] > 10 &&
    isAvailable231 &&
    availableTiming231[0] > 10 &&
    isAvailable232 &&
    availableTiming232[0] <= 8
  )
    ctx.reply(
      "Best choice is bus 232 - B'cos the other 2 buses are not coming yo!"
    );
  else if (isAvailable235 && isAvailable231) {
    if (availableTiming235[0] > availableTiming231[0] + 2)
      ctx.reply("Best choice is bus 231 - 235 gonna take long!");
    else ctx.reply("Best choice is bus 235 - 231 gonna take long!");
  } else ctx.reply("Just take 235 : > ");
};
