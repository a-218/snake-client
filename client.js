const { builtinModules } = require("module");
const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");// set up encoding for from client to server
  conn.on("data", () => { //data from server to client (data) -> data received from server
    console.log('you ded cuz you idled,' );
  });
  conn.on("connect", () => {
    // code that does something when the
    conn.write("Name: _aaa");
    console.log('connection is successful');
  });


  return conn;
};

module.exports = connect;