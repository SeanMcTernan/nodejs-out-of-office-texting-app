const request = require("request");
const apiKey = process.env.APIKEY;

const sendMessage = (number, message) => {
    request.post(
          `https://tollfree.simpletexting.com/v1/send?token=${apiKey}&phone=${number}&message=${message}`
        );
}

module.exports = sendMessage