const { 
  nextISSTimesForMyLocation
} = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((times) => {
    console.log("Fly Over Times: ", times);
  })
  .catch((error) => {
    console.log("there was an error");
  });

