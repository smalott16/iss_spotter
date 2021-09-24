const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, data) => {
  if (error) {
    console.log("There was an error getting the ISS Times:", error);
  }
  console.log("Here are the ISS Flyover times for your location:\n", data);
  
});
