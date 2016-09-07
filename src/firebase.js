const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAT7NrN4OvGspbCSksJ97ZoW_zJApVWGpE",
    authDomain: "networking-2078d.firebaseapp.com",
    databaseURL: "https://networking-2078d.firebaseio.com",
    storageBucket: "networking-2078d.appspot.com",
  };
  firebase.initializeApp(config);

  module.exports = firebase;
