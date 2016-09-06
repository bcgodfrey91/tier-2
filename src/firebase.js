const firebase = require('firebase')
const config = {
    apiKey: "AIzaSyAT7NrN4OvGspbCSksJ97ZoW_zJApVWGpE",
    authDomain: "networking-2078d.firebaseapp.com",
    databaseURL: "https://networking-2078d.firebaseio.com",
    storageBucket: "",
  }

  firebase.initializeApp(config)

  module.exports = firebase
