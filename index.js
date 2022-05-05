const { Block, Blockchain } = require("./blockchain.js");

const test = new Blockchain();

test.addBlock(new Block(Date.now().toString(), { from: "Alex", to: "Satoshi", amount: 132132121 }));
test.addBlock(new Block(Date.now().toString(), { from: "Alexander", to: "Alex", amount: 8768676 }));
test.addBlock(new Block(Date.now().toString(), { from: "Alendrey", to: "Malder", amount: 1342132121 }));

console.log(test.chain);