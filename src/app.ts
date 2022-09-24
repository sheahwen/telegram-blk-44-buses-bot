"use strict";

import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
import { startCommand } from "./commands/start";
import { helpCommand } from "./commands/help";
import { testCommand } from "./commands/test";
import { generateCommandForAllCases } from "./helper/generateArrayForAllCases";
import { hearsHi } from "./hears/hi";
import { onText } from "./on/text";
dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

// /start command
bot.start((ctx) => startCommand(ctx));

// /help command
bot.help((ctx) => helpCommand(ctx));

// /test command
bot.command(generateCommandForAllCases("test"), (ctx) => testCommand(ctx));

// hears method
// need to disable group privacy setting for use in groupchat
bot.hears("hi", (ctx) => hearsHi(ctx));

// on method
bot.on("text", (ctx) => onText(ctx));

bot.launch();
