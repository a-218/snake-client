const { builtinModules } = require("module");
const net = require("net");
const { stderr } = require("process");

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;  // stdin standard input,- register key pressing
  stdin.setRawMode(true);    //stdout standard output -output data to terminal
  stdin.setEncoding("utf8");
  stdin.resume();  
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
    if (key === '\u0003') {
      process.exit();
    }
    if(key === 'w'){
     connection.write('Move: up');
    }
    if(key === 's'){
     connection.write('Move: down');
    }
    if(key === 'a'){
      connection.write('Move: left');
    }
    if(key === 'd'){
     connection.write('Move: right');
    }
    if(key === '1'){
     connection.write('Say: Hi');
    };
};

module.exports = setupInput;