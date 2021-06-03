
// PORT: 50542
// HOST: "135.23.222.131"
// IP: 192.168.0.139

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131", // IP address here,
    port: 50542 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", () => {
    // code that does something when the
    console.log('you ded cuz you idled');
  });
  
  return conn;
};

console.log("Connecting ...");
connect();