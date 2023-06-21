const { connect } = require("./client"); // require connect function which contains an object in ES6 style from client.js

// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

console.log("Connecting ..."); // initial print
connect(); // then actually call `connect` to connect with game server
