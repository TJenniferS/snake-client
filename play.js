const { connect } = require("./client"); // require connect function which contains an object in ES6 style from client.js

const { setupInput } = require("./input"); // require setupInput


console.log("Connecting ..."); // initial print

const conn = connect(); // then call `connect` to connect with game server
// declare conn to connect () rather than just calling connect() for WASD input

setupInput(); // call setupInput