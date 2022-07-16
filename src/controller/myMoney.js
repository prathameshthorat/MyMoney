const utility = require('../helpers/utility')
const myMoneyService = require('../services/myMoney')

const processLineAsCommand = (line, database) => {
    const commandAndInput = line.split(' ')
    const command = commandAndInput[0]
    try {
        switch(command) {
            case 'ALLOCATE' : 
                utility.validateInputSize(commandAndInput, 3)
                myMoneyService.allocateFunds(database, commandAndInput[1], commandAndInput[2], commandAndInput[3])
                break
            case 'SIP' :     
                utility.validateInputSize(commandAndInput, 3)
                myMoneyService.sip(database, commandAndInput[1], commandAndInput[2], commandAndInput[3])
                break
            case 'CHANGE' :     
                utility.validateInputSize(commandAndInput, 4)
                myMoneyService.change(database, commandAndInput[1], commandAndInput[2], commandAndInput[3], commandAndInput[4])
                break
            case 'BALANCE' :     
                utility.validateInputSize(commandAndInput, 1)
                myMoneyService.balance(database, commandAndInput[1])
                break 
            case 'REBALANCE' :
                utility.validateInputSize(commandAndInput, 0)
                myMoneyService.rebalance(database, commandAndInput[0])
                break 
            default: 
                throw new Error("Invalid Command " + command + " supplied")            
        }
    } catch (err){
        throw err
    }    
}

module.exports = {
    processLineAsCommand
}