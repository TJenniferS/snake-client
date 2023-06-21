// Stores the active TCP connection object
let connection; // declare connection outermost scope for else if statements WASD

// setup interface to handle user input from stdin

const setupInput = function(conn) {

  connection = conn; // assign passed connection object to connection
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // Event listener for user input
  stdin.on("data", handleUserInput);

  // return stdin; // not currently being used
};


let pressedKeys = {}; // for diagonal

// handle user input from stdin
const handleUserInput = function(key) {
  if (key === '\u0003') {
    // Terminate game upon Ctrl + C
    process.exit();

    // else if statements for WASD

  } else if (key === 'w') {
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
  }

};

// setupInput();

module.exports = { setupInput }; // export setupInput function containing an objects
