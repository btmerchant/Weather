/* jshint esnext: true */
requirejs.config({
  baseUrl: "./javascripts",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "firebase" : "../lib/bower_components/firebase/firebase",
    "lodash" : "../lib/bower_components/lodash/lodash.min",
    "material": "../lib/bower_components/bootstrap-material-design/dist/js/material.min",
    // "noUiSlider": "../lib/noUiSlider.8.0.2/nouislider.min",
    // "q" : "../lib/bower_components/q/q"
  },
  shim: {
    "bootstrap": ["jquery"],
    "material": ["bootstrap"],
    // "noUiSlider": ["jquery"],
    "firebase" : {exports: "Firebase"
    }
  }
});

require(
  ["jquery", "lodash", "bootstrap", "material", "firebase", "hbs"],
  function($, _, bootstrap, material, firebase, handlebars) {

//Initialize material design for project
  $.material.init();
