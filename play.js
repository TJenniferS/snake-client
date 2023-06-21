const { connect } = require("./client"); // require connect function which contains an object in ES6 style from client.js

const { setupInput } = require("./input"); // require setupInput


console.log("Connecting ..."); // initial print
connect(); // then actually call `connect` to connect with game server

setupInput(); // call setupInput