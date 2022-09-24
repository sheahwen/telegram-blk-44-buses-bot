"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import axios from "axios";
import { Telegraf } from "telegraf";

import { busData } from "../lib/data/buses";
import { APIConfig, generateAPIUrl } from "../lib/helper/busArrivalAPIReq";
import { generateCommandForAllCases } from "../lib/helper/generateArrayForAllCases";

import { helpCommand } from "./commands/help";
import { startCommand } from "./commands/start";
import { testCommand } from "./commands/test";
import { hearsHi } from "./hears/hi";
import { onText } from "./on/text";

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

// /start command
bot.start((ctx) => startCommand(ctx));

// /help command
bot.help((ctx) => helpCommand(ctx));

// /test command
bot.command(generateCommandForAllCases("test"), (ctx) => testCommand(ctx));

// /235 command
bot.command("bus", (ctx) => {
  axios
    .get(generateAPIUrl(busData[0].code, busData[0].serviceNo), APIConfig)
    .then((res) => {
      console.log(res.data);
      ctx.reply("235");
    })
    .catch((e) => console.log(e));
});

// hears method
// need to disable group privacy setting for use in groupchat
bot.hears("hi", (ctx) => hearsHi(ctx));

// on method
bot.on("text", (ctx) => onText(ctx));

bot.launch();
