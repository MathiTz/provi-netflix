import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";

firebase.initializeApp({
	apiKey: "AIzaSyCESi6Tx1Kuk1knE4qFJhIt25B0nj_8EzQ",
	authDomain: "provi-netflix-test.firebaseapp.com",
	databaseURL: "https://provi-netflix-test-default-rtdb.firebaseio.com",
	projectId: "provi-netflix-test",
	storageBucket: "provi-netflix-test.appspot.com",
	messagingSenderId: "206271942426",
	appId: "1:206271942426:web:b8175b950d5d275e02e6a3",
	measurementId: "G-4NL90RHEW4",
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
