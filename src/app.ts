"use strict";

import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

// /start command
bot.start((ctx) => {
  ctx.reply("Start command is triggered");
});

// /help command
bot.help((ctx) => {
  ctx.reply("Help command is triggered");
});

bot.launch();
