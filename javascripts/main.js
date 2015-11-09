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
    'q': '../lib/bower_components/q/q',
    "oauth": '../lib/bower_components/oauth-js/dist/oauth.min'
  },
  shim: {
    "bootstrap": ["jquery"],
    // "material": ["bootstrap"],
    "firebase" : {exports: "Firebase"
    }
  }
});

require(
  ["jquery", "lodash", "q", "bootstrap", "firebase", "oauth", "hbs", "dataCall", "dataWrite", "apiCall", "loginSignUp", "hbs!../templates/weather"],
  function($, _, q, bootstrap, firebase, oauth, handlebars, dataCall, dataWrite, apiCall, loginSignUp, weatherHBS) {
  // Working on getting OAuth to work
  // OAuth.initialize('Lj4QOB73DKmntRgtPjY3_-rDiN0');

    //Sign Up view
  $(document).on("click", "#swLogIn", function() {
    $("#logInView").show();
    $("#landingView").hide();
  });

   $(document).on("click", "#swSignUp", function() {
    $("#signUpView").show();
    $("#landingView").hide();
  });

  zipCode = 37205;
  $(document).on("click", "#submit3", function() {
    zipCode =$("#zipCode").val();
   if (checkZip(zipCode)) {
      apiCall.getWeather(zipCode)
        .then(function(weather) {
          console.log('weather', weather);
          $("#zipSearchView").hide();
          $("#mainContentView").show();
          $('#mainContent').append(weatherHBS({weather3: weatherData}));
        });
    }
    else {
          alert('Please Enter A Valid Zipcode');
    }
  });

  $(document).on("click", "#submit7", function() {
    zipCode =$("#zipCode").val();
   if (checkZip(zipCode)) {
      apiCall.getWeather(zipCode)
        .then(function(weather) {
          console.log('weather', weather);
          $("#zipSearchView").hide();
          $("#mainContentView").show();
          $('#mainContent').append(weatherHBS({weather7: weatherData}));
        });
    }
    else {
          alert('Please Enter A Valid Zipcode');
    }
  });

  // var firebaseRef = new Firebase("https://chanceofrain.firebaseio.com/");

  dataWrite.putFirebase()
      .then(function(weather){
        console.log("Put Weather= ", weather);
      });

  dataCall.getFirebase()
      .then(function(weather) {
        console.log('Get Weather= ', weather);
        // newMembers = profileData;
        // console.log('newMembers', newMembers);
      // $('#profileDisplay').append(memTempl({newMembers: profileData}));
      });
  function checkZip(value) {
      return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value);
    }
});
