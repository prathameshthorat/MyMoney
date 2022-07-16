const fs = require('fs')
const readline = require('readline')
const myMoneyController = require('./src/controller/myMoney') 

let database = {};

const fileRead = (filepath) => {
    try {
        const lineReader = readline.createInterface({
            input: fs.createReadStream(filepath)
        })
      
        lineReader.on('line', (line) => {
            processCommand(line)   
        })
      } catch (err) {
        console.error(err);
      }
}

const processCommand = (line) => {
    try{
        myMoneyController.processLineAsCommand(line, database)
    } catch (err) {
        console.log(err)
    } 
}

fileRead('./data/input.txt')


