const fs = require('fs');

exports.watchFile = function (fileName) {
  fs.watch(fileName, () => {
    console.log('file changed');
  });
};

exports.readFile = function (fileName) {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data.toString());
  });
  console.log('Hello from fsModule.readFile');
};

exports.readFileSync = function (fileName) {
  const data = fs.readFileSync(fileName);
  console.log(data.toString());
  console.log('Hello from fsModule.readFileSync');
};
