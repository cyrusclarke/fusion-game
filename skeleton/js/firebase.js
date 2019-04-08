var mykey = config.MY_KEY;
var secretkey = config.SENDER_ID;



// Initialize Firebase
var config = {
	apiKey: mykey,
	authDomain: "fusionloop.firebaseapp.com",
	databaseURL: "https://fusionloop.firebaseio.com",
	projectId: "fusionloop",
	storageBucket: "fusionloop.appspot.com",
	messagingSenderId: secretkey
};
firebase.initializeApp(config);