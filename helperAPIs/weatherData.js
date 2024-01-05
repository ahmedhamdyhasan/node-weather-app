const request = require("request");
const weatherData = (longtitude, latitude, callback) => {
  const weatherApiUrl =
    "http://api.weatherapi.com/v1/current.json?key=6c25b70826994c52a60195512232207&q=" + latitude + "," + longtitude;
 

    request({ url: weatherApiUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect weather service", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        "The weather in " +
          response.body.location.name +
          "is " +
          response.body.current.condition.text +
          " and the temperature is " +
          response.body.current.temp_c
        
      );
    }
  });
};

module.exports = weatherData;
