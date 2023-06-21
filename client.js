const net = require("net"); // require net from Node.js

const { IP, PORT } = require("./constants");
// require IP and PORT as they are constants

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for receiving data from server
  conn.on("data", (data) => {
    console.log("received:", data); // log received data
  });

  // event handler to print successfully connected to game server
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    sendMessage(conn, "Name: JCR"); // `Hey JCR` in server board

  });

  // event handler to handle close event and exit the program with idle or crash
  conn.on("close", () => {
    gameOver(); // possible output: "you crashed, so you ded."
    //
  });

  return conn; // return connected object to caller
};


const sendMessage = function(connection, message) {
  connection.write(message);
};

const handleError = function(error) {
  console.error("An error occurred:", error);
};

const gameOver = function() {
  console.log("Connection closed. Exiting...");
  process.exit();
};

module.exports = { connect, sendMessage, handleError, gameOver };
// export connect function containing an objects