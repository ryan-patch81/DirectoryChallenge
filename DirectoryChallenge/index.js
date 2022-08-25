const Create = require('./create.js');
const List = require('./list.js');
const Move = require('./move');
const Delete = require('./delete.js');
const readline = require('readline');

let controlObject = {};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const lib = {
    CREATE: Create,
    LIST: List,
    DELETE: Delete,
    MOVE: Move
}

const commandLines = function () {
    rl.question("Command: ", function (data) {
        const args = data.split(/\s/);
        const command = args[0].toUpperCase();
        if(lib[command]) {
            lib[command](controlObject, args.slice(1));
        }
        else {
            console.log(`Unknown command: ${command}`);
        }
        
        commandLines();
      });
}

commandLines();