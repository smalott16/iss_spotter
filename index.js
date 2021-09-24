const {fetchMyIP, fetchCoordinatesByIP} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("There was an error fetching you IP", error);
    return;
  }

  console.log("It worked! Your IP:", ip);
});

fetchCoordinatesByIP('104.246.154.209', (error, data) => {
  if (error) {
    console.log("There was an error fetching your coordinates:", error);
  }
  console.log("Your Coordinates:", data);
});
