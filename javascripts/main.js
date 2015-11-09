/* jshint esnext: true */
requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "firebase" : "../lib/bower_components/firebase/firebase",
    "lodash" : "../lib/bower_components/lodash/lodash.min",
    // "material": "../lib/bower_components/bootstrap-material-design/dist/js/material.min",
    'q': '../lib/bower_components/q/q'

  },
  shim: {
    "bootstrap": ["jquery"],
    // "material": ["bootstrap"],
    "firebase" : {exports: "Firebase"
    }
  }
});

require(
  ["jquery", "lodash", "q", "bootstrap", "firebase", "dataCall", "dataWrite", "apiCall", "loginSignUp", "currentWeather"],
  function($, _, q, bootstrap, firebase, dataCall, dataWrite, apiCall, loginSignUp, currentWeather) {


  zipCode = 37205;
  var globalWeather;
  $(document).on("click", "#submitZip", function() {
    zipCode =$("#zipCode").val();
   if (checkZip(zipCode)) {
      apiCall.getWeather(zipCode)
        .then(function(weather) {
          console.log('weather', weather);
          globalWeather= weather;
          currentWeather.populateWeather(globalWeather);
          // $("#returnData")html("hello");
        });
    }
    else {
          alert('Please Enter A Valid Zipcode');
    }

  });

  // var firebaseRef = new Firebase("https://chanceofrain.firebaseio.com/");


  dataWrite.putFirebase()
      .then(function(weather){
        // console.log("Put Weather= ", weather);


      });


  dataCall.getFirebase()
      .then(function(weather) {
        // console.log('Get Weather= ', weather);
        // newMembers = profileData;
        // console.log('newMembers', newMembers);
      // $('#profileDisplay').append(memTempl({newMembers: profileData}));
      });
  function checkZip(value) {
      return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value);
    }

});
