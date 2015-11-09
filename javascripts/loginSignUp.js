define(function(require) {
  var $ = require("jquery");
  var q = require("q");
  var firebase = require("firebase");
  var bootstrap = require("bootstrap");


	var firebaseRef = new Firebase("https://chanceofrain.firebaseio.com/");
	var authData;

		$("#signUp").click(function(e) {
			// e.preventDefault();
			console.log('you clicked register');
			var newUser = {
				name: $('#name').val(),
				email: $('#email').val(),
				password: $('#password').val()
			};
		console.log(newUser);

		firebaseRef.createUser(newUser,
			function(error, getAuth){
				if(error){
					alert('This UserName Already Exists');
					console.log('error creating user:', error);
				}else{
					console.log("success with uid", getAuth.uid);
					firebaseRef.child(getAuth.uid).set(newUser);
					// window.location = "./index.html";
					authData= getAuth.uid;
					$("#zipSearch").show();
    			$("#signUpView").hide();
				}
		});
	});

			$('#logIn').click(function(e){

				e.preventDefault();
				console.log('you clicked login');
				firebaseRef.authWithPassword({
				email: $('#lEmail').val(),
				password: $('#lPassword').val()
				}, function(error, authData) {
				if (error) {
					console.log("Login Failed!", error);
				} else {
					console.log("Authenticated successfully with payload:", authData);
					$("#zipSearchView").show();
    			$("#logInView").hide();
    			// window.location = "index.html"
				}
		});
	});
});
