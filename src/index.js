const moment = require("moment");
const express = require("express");
const redis = require("redis");
const port = process.env.PORT || 3000;
// const REDIS_PORT = process.env.REDISCLOUD_URL || 6379;
const sendMessage = require('./utils/sendMessage')
const supportHours = require("./utils/supportHours");
const cache = require('./cache/cache')
const app = express();
const client = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true})

app.get("/webhooks", cache, (req, res) => {
  const phone = req.query.from;
  const message = req.query.text;
  client.setex(phone, 60, message)
  const result = supportHours(moment().utcOffset("-05:00"));
  res.status(200).send()
  sendMessage(phone, result)
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

