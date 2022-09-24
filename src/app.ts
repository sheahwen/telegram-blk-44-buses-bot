"use strict";

import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
import { startCommand } from "./commands/start";
import { helpCommand } from "./commands/help";
import { testCommand } from "./commands/test";
dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

// /start command
bot.start((ctx) => startCommand(ctx));

// /help command
bot.help((ctx) => helpCommand(ctx));

// /test command
bot.command("test", (ctx) => testCommand(ctx));

bot.launch();
