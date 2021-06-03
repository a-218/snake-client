const { builtinModules } = require("module");
const net = require("net");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (conn) {
  // your code here
  connection = conn;
  process.stdin.on('data', (key) => {
    process.stdout.write('.');
    if (key === '\u0003') {
      process.exit();
    }
    if(key === 'w'){
      console.log('Move: up');
    }
    if(key === 's'){
      console.log('Move: down');
    }
    if(key === 'a'){
      console.log('Move: left');
    }
    if(key === 'd'){
      console.log('Move: right');
    }
  });
};

module.exports = setupInput;