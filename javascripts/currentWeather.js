define(function(require) {
  var $ = require("jquery");
  var handlebars = require("hbs");


  return {
  populateWeather: function(weatherObject) {
    console.log('populateWeather', weatherObject);
  require(['hbs!../templates/currentweather'], function(currentweather) {
        $("#mainContentView").html(currentweather(weatherObject));
      });
    }
  };
});
