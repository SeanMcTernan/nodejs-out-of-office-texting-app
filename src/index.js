const moment = require("moment");
const express = require("express");
const redis = require("redis");
const port = process.env.PORT || 3000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const sendMessage = require('./utils/sendMessage')
const supportHours = require("./utils/supportHours");
const cache = require('./cache/cache')

const app = express();
const client = redis.createClient(REDIS_PORT);

app.get("/webhooks", cache, (req, res) => {
  client.setex(phone, 15, message)
  const result = supportHours(moment().utcOffset("-05:00"));
  const phone = req.query.from;
  res.status(200).send()
  sendMessage(phone, result)
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

