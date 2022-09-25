# telegram-blk-44-buses

## What does this do? 
This telegram bot __@blk-44-buses-bot__ that returns the arrival times of all the bus services that I take frequently. I realised that I am in constant trilemma on which bus to take and the waiting times can vary hugely. So I have collected 25 data points that record the time needed to walk to bus stop, bus trip duration and time needed to walk from destination bus stop to mrt platform. Leveraging on the data, the bot will provide advice on the best or fastest route. 

## What is this app for? 
* Hot weather
* Extra anxiety from an approaching bus, knowing the next bus is in 15 minutes
* Not in a hurry but that constant internal conflict to run a little to save 15 minutes
* Choose the longest bus service out of the 3 that's available
* Sadly, that's me HAHA

This app is to prevent the above scenario.

## Who is this app for? 
Myself :>

## Technology
This telegram bot is coded in Typescript with Telegraf, a JS Telegram wrapper. It is deployed to AWS Lambda with Amazon API Gateway.
Bus arrival times are from LTA Datamall endpoint.
