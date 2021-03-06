/* jshint esnext: true */
requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    // "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
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
  ["jquery", "lodash", "q", "bootstrap", "firebase", "dataCall", "dataWrite", "apiCall", "loginSignUp"],
  function($, _, q, bootstrap, firebase, dataCall, dataWrite, apiCall, loginSignUp) {

//Initialize material design for project
// $.material.init();
zipCode = 37205;
$(document).on("click", "#submitZip", function() {
  zipCode =$("#zipCode").val();
  apiCall.getWeather(zipCode)
    .then(function(weather) {
      console.log('weather', weather);
      // $("#returnData")html("hello");
    });
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

});
