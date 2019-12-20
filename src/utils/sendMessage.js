const request = require("request");
const apiKey = process.env.APIKEY;

const sendMessage = (number, message) => {
    request.post(
          `https://app2.simpletexting.com/v1/send?token=${apiKey}&phone=${number}&message=${message}`
        );
}

module.exports = sendMessage