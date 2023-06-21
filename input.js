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