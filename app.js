const BlockChain = require('./blockchain')
const BLock = require('./block')
const Transaction = require('./transaction')

const genesisBlock = new BLock()
const blockChain = new BlockChain(genesisBlock)

const trans1 = new Transaction('Gabriel', 'Ligia', 500)
const block1 = blockChain.createNewBlock([trans1])
blockChain.addBlock(block1)

const trans2 = new Transaction('Jhon', 'Jack', 300)
const block2 = blockChain.createNewBlock([trans1, trans2])
blockChain.addBlock(block2)

console.log(blockChain)
