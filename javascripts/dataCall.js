define(function(require) {
  var $ = require("jquery");
  var q = require("q");

  return {
    getFirebase: function () {
      var deferred = q.defer();
      $.ajax({
        url:"https://chanceofrain.firebaseio.com/"
      }).done(function(weather) {
        deferred.resolve(weather);
        console.log("Weather = ", weather);
      })// End of ajax call
        .fail(function(xhr, status, error) {
          deferred.reject(error);
        });
        console.log("Weather Promise", deferred.promise);
        return deferred.promise;
    }// End of loadProfiles function
  }; // End of return
}); //
