var five = require("johnny-five");
var firebase = require("firebase");
var board = new five.Board();

var config = {
    apiKey: "AIzaSyAfsIiLf2OhTWZvC-B61a0AfPS1SA-rZ3Y",
    authDomain: "iot-trash-awsome.firebaseapp.com",
    databaseURL: "https://iot-trash-awsome.firebaseio.com",
    projectId: "iot-trash-awsome",
    storageBucket: "iot-trash-awsome.appspot.com",
    messagingSenderId: "187072088990"
  };
  firebase.initializeApp(config);

var database = firebase.database();

function writeUserData(newVal) {
  firebase.database().ref().set({
    trashStatus : newVal
  });
};

board.on('ready', function() {
  console.log('board is ready');
  
  this.pinMode(2, five.Pin.INPUT);
  this.pinMode(3, five.Pin.INPUT);

  this.digitalRead(2, function (value) {
    if (value === 1) {
      console.log('medium');
      writeUserData('medium');
    } else {
      console.log('low');
       writeUserData('low');
    }
  });

  this.digitalRead(3, function (value) {
    if (value === 1) {
      console.log('high');
      writeUserData('high');
    }
  });
});