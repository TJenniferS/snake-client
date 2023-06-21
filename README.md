# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by 'eating' pieces of food. As it moves and eats, it grows, and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls or bumping into itself, upon which it dies.

This is a multiplayer take on the genre.

Before you can run this client, you will need to be running the server-side, which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer).

## Getting Started

1. Follow the steps inside the `snek` server repository to run the server-side.
2. Run the development snake client using the `node play.js` command.

## Files

### `play.js`

This is the entry point of the snake client application. It imports the `connect` function from the `client.js` module and the `setupInput` function from the `input.js` module. It establishes a connection to the game server using the `connect` function and sets up user input handling using the `setupInput` function.

### `input.js`

This module handles user input from the command line. It exports the `setupInput` function, which sets up the input interface and registers event listeners for user input. It handles different key presses and sends corresponding commands to the game server via the established connection.

### `constants.js`

This module defines the IP address and port number constants required to establish a connection with the game server. The `IP` constant represents the server's IP address, and the `PORT` constant represents the port number.

### `client.js`

This module handles the network connection with the game server. It exports the `connect`, `sendMessage`, `handleError`, and `gameOver` functions. The `connect` function creates a TCP connection to the game server using the IP address and port number from `constants.js`. It sets up event handlers for receiving data from the server, successful connection, and connection close. The `sendMessage` function sends messages to the server over the established connection. The `handleError` function logs any errors that occur during the connection. The `gameOver` function handles the event when the connection is closed and exits the client application.

