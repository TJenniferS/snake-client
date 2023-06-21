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
    conn.write("Name: JCR"); // `Hey JCR` in server board

  });

  return conn; // return connected object to caller
};

module.exports = { connect }; // export connect function containing an objects