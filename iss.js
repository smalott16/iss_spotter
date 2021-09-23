const request = require("request");

const fetchMyIP = function(callback) {
  //use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when feetching IP. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    const ip = JSON.parse(body);
    callback(null, ip);

  });
};

module.exports = { fetchMyIP };
