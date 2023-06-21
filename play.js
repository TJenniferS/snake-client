const { connect } = require("./client"); // require connect function which contains an object in ES6 style from client.js

const { setupInput } = require("./input"); // require setupInput


console.log("Connecting ..."); // initial print

const connection = connect(); // call `connect` to connect with game server
// declare conn to connect () rather than just calling connect() for WASD input
// store returned connection object in `conn`

setupInput(connection); // call setupInput and pass connection object as argument to setupInput
