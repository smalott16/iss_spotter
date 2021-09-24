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

fetchCoordinatesByIP = function(ipString, callback) {
  request(`https://freegeoip.app/json/${ipString}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    const {latitude, longitude} = JSON.parse(body);
    //console.log(latitude);
    callback(null, {latitude, longitude});

  });
};

fetchISSFlyoverTimes = function (coords, callback) {
  request(`https://iss-pass.herokuapp.com/json/?lat=${coords["latitude"]}&lon=${coords["longitude"]}`, (error, message, body) => {
    if (error) {
      callback(error, null);
    }

    if (message.statusCode !== 200) {
      const msg = `Status Code ${message.statusCode} when fetching flyover times. Response ${body}`;
      callback(Error(msg), null);
      return;
    }

    const {response} = JSON.parse(body);
    callback(null, response);

  });
};

module.exports = {
  fetchMyIP,
  fetchCoordinatesByIP,
  fetchISSFlyoverTimes,
};
