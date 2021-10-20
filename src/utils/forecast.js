const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=67bc11f38f0c6656ff15b2c61a80b2f2&query=${longitude},${latitude}&units=f`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      console.log(response.body.current);
      callback(
        undefined,
        `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degress out and it feels like ${response.body.current.feelslike} degrees out and humidity here is ${response.body.current.humidity} %.`
      );
    }
  });
};

// forecast(44.1545, -75.7088, (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });

module.exports = forecast;
