"use strict";

import { Telegraf } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN!);

// to start
bot.start((ctx) => {
  ctx.reply("Start command is triggered");
});

bot.launch();
