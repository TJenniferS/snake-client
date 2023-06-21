const net = require("net"); // require net from Node.js

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "172.27.131.43", // IP address here,
    port: 50541 // PORT number here,
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
    conn.write("Name: TJS"); // `Hey TJS` in server board

    // // Delay before sending the "Move: up" command
    // setTimeout(() => {
    //   // conn.write("Move: up");
    // }, 500);

  });

  return conn; // return connected object to caller
};

module.exports = { connect }; // export connect function containing an objects