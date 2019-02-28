const fs = require("fs");

function done(output) {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
}

function evaluateCmd(userInput) {
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];
  done(command);
  switch (command) {
    case "echo":
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      break;
    case "cat":
      commandLibrary.cat(userInputArray.slice(1));
      break;
    case "head":
      commandLibrary.head(userInputArray[1], userInputArray[2]);
      break;
    case "tail":
      commandLibrary.tail(userInputArray[1], userInputArray[2]);
      break;
    default:
      console.log('No such command found');
  }
}
const commandLibrary = {
  "echo": function(userInput) {
    done(userInput);
  },
  "cat": function(fullPath) {
    const fileName = fullPath[0];
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      done(data);
    });
  },
  "head": function(userInputOne, userInputTwo) {
    fs.readFile(userInputOne, (err, data) => {
      const newData = data.toString().split('\n');
      let joinedData = [];
      for (var i = 0; i <= userInputTwo; i++) {
        joinedData.push(newData[i]);
      }
      console.log(joinedData.join('\n'));
    });
  },
  "tail": function(userInputOne, userInputTwo) {
    fs.readFile(userInputOne, (err, data) => {
      const newData = data.toString().split('\n');
      let joinedData = [];
      for (var i = userInputTwo; i >= 0; i--) {
        joinedData.push(newData[i]);
      }
      console.log(joinedData.join('\n'));
    });
  }
};

module.exports.commandLibrary = commandLibrary;
module.exports.evaluateCmd = evaluateCmd;
