"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import { Telegraf } from "telegraf";

import { generateCommandForAllCases } from "./lib/helper/generateArrayForAllCases";

import { helpCommand } from "./src/commands/help";
import { startCommand } from "./src/commands/start";
import { testCommand } from "./src/commands/test";
import { hearsHi } from "./src/hears/hi";
import { onText } from "./src/on/text";
import { busCommand } from "./src/commands/bus";

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

// /start command
bot.start((ctx) => startCommand(ctx));

// /help command
bot.help((ctx) => helpCommand(ctx));

// /test command
bot.command(generateCommandForAllCases("test"), (ctx) => testCommand(ctx));

// /235 command
bot.command(generateCommandForAllCases("bus"), (ctx) => {
  busCommand(ctx);
});

// hears method
// need to disable group privacy setting for use in groupchat
bot.hears("hi", (ctx) => hearsHi(ctx));

// on method
bot.on("text", (ctx) => onText(ctx));

// bot.launch();

exports.handler = (event: any, context: any, callback: any) => {
  const tmp = JSON.parse(event.body);
  bot.handleUpdate(tmp);
  return callback(null, {
    statusCode: 200,
    body: "",
  });
};
