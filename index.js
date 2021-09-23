const {fetchMyIP} = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("There was an error fetching you IP", error);
    return;
  }

  console.log("It worked! Your IP:", ip);
});

