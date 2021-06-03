
// PORT: 50542
// HOST: "135.23.222.131"
// IP: 192.168.0.139

const net = require("net");
const connect = require('./client');
const  setupInput  = require("./input");

setupInput(connect());
console.log("Connecting ...");
