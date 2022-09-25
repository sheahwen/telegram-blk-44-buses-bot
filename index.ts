"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import { Telegraf } from "telegraf";

import { generateCommandForAllCases } from "./lib/helper/generateArrayForAllCases";

import { helpCommand } from "./src/commands/help";
import { startCommand } from "./src/commands/start";
import { onText } from "./src/on/text";
import { busCommand } from "./src/commands/bus";
import { choose4MeCommand } from "./src/commands/choose4me";
import { hearsHii } from "./src/hears/hii";
import { choose4MeCb } from "./src/cb/choose4me";

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

// /start command
bot.start((ctx) => startCommand(ctx));

// /help command
bot.help((ctx) => helpCommand(ctx));

// /test command
// bot.command(generateCommandForAllCases("test"), (ctx) => testCommand(ctx));

// /bus command
bot.command(generateCommandForAllCases("bus"), (ctx) => {
  busCommand(ctx);
});

// /choose4me command
bot.command(generateCommandForAllCases("choose4me"), (ctx) => {
  choose4MeCommand(ctx, bot);
});

// hears method
// need to disable group privacy setting for use in groupchat
bot.hears("hii", (ctx) => hearsHii(ctx));

// on method
bot.on("text", (ctx) => onText(ctx));

// handle callback query
bot.action("choose4me-yes", (ctx) => choose4MeCb(ctx, "yes"));

bot.launch();

// exports.handler = (event: any, context: any, callback: any) => {
//   const tmp = JSON.parse(event.body);
//   bot.handleUpdate(tmp);
//   return callback(null, {
//     statusCode: 200,
//     body: "",
//   });
// };
