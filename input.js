// Stores the active TCP connection object
let connection; // declare connection outermost scope for else if statements WASD

// async with stdin
let stdin;

// setup interface to handle user input from stdin
const setupInput = function(conn) {

  connection = conn; // assign passed connection object to connection
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Event listener for user input
  stdin.on("data", handleUserInput);

  // Event listener for Ctrl + c
  stdin.on("data", handleCtrlC);

  // set timeout to handle continuous input async
  setTimeout(handleContinuousInput, 0);

  // return stdin; // not currently being used
};

// handle user input from stdin
const handleUserInput = function(key) {

  // if statements for WASD

  if (key === 'w') {
    // `w` sends the "Move: up" command to the server
    connection.write("Move: up");

  } else if (key === 'a') {
    // `a` sends the "Move: left" command to the server
    connection.write("Move: left");

  } else if (key === 's') {
    // `s` sends the "Move: down" command to the server
    connection.write("Move: down");

  } else if (key === 'd') {
    // `d` sends the "Move: right" command to the server
    connection.write("Move: right");


    // when WASD pressed, print messages on server game board
  } else if (key === 'W') {
    connection.write("Say: Moving up!");

  } else if (key === 'A') {
    connection.write("Say: Moving left!");

  } else if (key === 'S') {
    connection.write("Say: Moving down!");

  } else if (key === 'D') {
    connection.write("Say: Moving right!");
  }

};

const handleCtrlC = function(key) {
  if (key === "\u0003") {
    // Terminate game upon Ctrl + C
    process.exit();
  }
};


module.exports = { setupInput }; // export setupInput function containing objects