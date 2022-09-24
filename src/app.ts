"use strict";

import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
import { startCommand } from "./commands/start";
import { helpCommand } from "./commands/help";
import { testCommand } from "./commands/test";
import { generateCommandForAllCases } from "./helper/generateArrayForAllCases";
import { hearsHi } from "./hears/hi";
dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

// /start command
bot.start((ctx) => startCommand(ctx));

// /help command
bot.help((ctx) => helpCommand(ctx));

// /test command
bot.command(generateCommandForAllCases("test"), (ctx) => testCommand(ctx));

// hears method
bot.hears("hi", (ctx) => hearsHi(ctx));

bot.launch();
