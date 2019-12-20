const redis = require("redis");
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

const cache = (req, res, next) => {
  const phone = req.query.from;
  const message = req.query.text;

  client.get(phone, (err, data) => {
    if (err) throw err;

    if (data !== null) {
        res.status(200).send()
    } else {
      next();
    }
  });
};

module.exports = cache;
