// console.log('Process from app.js= ', process);
// console.log('Hello Node');

// const helpers = require('./helpers.js');
// const total = helpers.sum(10, 200);

const { sum } = require('./helpers');
const { startHttpServer } = require('./httpServer');
const { startExpressServer } = require('./expressServer');
const { watchFile, readFile, readFileSync } = require('./fsModule');

const a = 5;
const b = 45;
const total = sum(a, b);
console.log(`Total of ${a} and ${b} = ${total}`);

console.log('starting http server');
startHttpServer(3000);
startExpressServer(3001);

const fileName1 = 'target.txt';
const fileName2 = 'target1.txt';
watchFile(fileName1);
readFile(fileName1);
readFileSync(fileName2);
