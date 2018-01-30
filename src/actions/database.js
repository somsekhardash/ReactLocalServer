var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyBNjhkX-a1PO1nDqU23fInkQGVrDzVWXeI",
  authDomain: "api-project-504583934101.firebaseapp.com",
  databaseURL: "https://api-project-504583934101.firebaseio.com"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;