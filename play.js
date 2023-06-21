const { connect } = require("./client"); // require connect function which contains an object in ES6 style from client.js


console.log("Connecting ..."); // initial print
connect(); // then actually call `connect` to connect with game server


// setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Event listener for user input
  stdin.on("data", handleUserInput);

  return stdin;
};

// handle user input from stdin
const handleUserInput = function (key) {
  if (key === '\u0003') {
    // Terminate game upon Ctrl + C
    process.exit();
  }

};

setupInput();