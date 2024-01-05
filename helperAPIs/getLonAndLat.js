// const request = require("request");
// const getLonAndLat = (country) => {
//   const geoCodeUrl =
//     "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
//     country +
//     ".json?access_token=pk.eyJ1IjoiZGV2YWhtZWRoYW1keWhhc2FuIiwiYSI6ImNsa2tjdGh4MDBid2EzcW5zMGh2cGViZ2YifQ.AAjyGC7yoGKP8dZB4jArEA";
//   request({ url: geoCodeUrl, json: true }, (error, response) => {
//     if (error) {
//       console.log("there is the error")
//     } else if (response.body.message) {
//       console.log(response.body.message);
//     } else if (response.body.features.length === 0) {
//       console.log("Unable to find location");
//     } else {
      
//         const latitude= response.body.features[0].center[1];
//         const longtitude= response.body.features[0].center[0];
//         console.log(latitude,longtitude)
      
//     }
//   });
// };

const request = require("request");
const getLonAndLat = (country, callback) => {
  const geoCodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    country +
    ".json?access_token=pk.eyJ1IjoiZGV2YWhtZWRoYW1keWhhc2FuIiwiYSI6ImNsa2tjdGh4MDBid2EzcW5zMGh2cGViZ2YifQ.AAjyGC7yoGKP8dZB4jArEA";
  request({ url: geoCodeUrl, json: true }, (error, response) => {
    if (error) {
      callback("there is the error", undefined);
    } else if (response.body.message) {
      callback(response.body.message, undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, 
        {
        latitude: response.body.features[0].center[1],
        longtitude: response.body.features[0].center[0],
      });

    }
  });
};



module.exports = getLonAndLat