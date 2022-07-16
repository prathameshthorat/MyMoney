const myMoney = require('../myMoney')
const utility = require('../../helpers/utility')
const myMoneyService = require('../../services/myMoney')
 

describe('Testing myMoney Controller', () => {
    
    let database
    let helperSpy

    beforeEach(() => {
        helperSpy = jest.spyOn(utility, 'validateInputSize')
        database = {}
    })

    afterEach(() => {
        database = {}
    })

    test('ALLOCATE Command', async () => {
        const myMoneyServiceSpy = jest.spyOn(myMoneyService, 'allocateFunds')
        myMoney.processLineAsCommand('ALLOCATE 8000 6000 3500', database )
        expect(helperSpy).toHaveBeenCalled()
        const object = {
           "balances" : [{"debt":6000, "equity": 8000, "gold":3500},],
           "mix": { "debt": 0.34285714285714286,"equity": 0.45714285714285713,"gold": 0.2,}, 
        }
        expect(myMoneyServiceSpy).toHaveBeenCalledWith(object, '8000', '6000', '3500')
    })

    test('SIP Command', async () => {
        const myMoneyServiceSpy = jest.spyOn(myMoneyService, 'sip')
        myMoney.processLineAsCommand('SIP 8000 6000 3500', database )
        expect(helperSpy).toHaveBeenCalled()
        expect(myMoneyServiceSpy).toHaveBeenCalled()
        expect(database).not.toBeNull()
    })

    test('CHANGE Command', async () => {
        const myMoneyServiceSpy = jest.spyOn(myMoneyService, 'change')
        database = { 'balances': [ { 'equity': 8000, 'debt': 6000, 'gold': 3500 } ],
                    'sip': { equity: 8000, debt: 6000, gold: 3500 } }
        myMoney.processLineAsCommand('CHANGE 11.00% 9.00% 4.00% JANUARY', database)
        expect(helperSpy).toHaveBeenCalled()
        expect(myMoneyServiceSpy).toHaveBeenCalledTimes(1)
        expect(database).not.toBeNull()
    })

    test('BALANCE Command', async () => {
        const myMoneyServiceSpy = jest.spyOn(myMoneyService, 'balance')
        const database = {
            balances: [
              { equity: 8880, debt: 6540, gold: 3640 },
              { equity: 16880, debt: 12540, gold: 7140 }
            ],
            sip: { equity: 8000, debt: 6000, gold: 3500 }
          }
        myMoney.processLineAsCommand('BALANCE JANUARY', database )
        expect(helperSpy).toHaveBeenCalled()
        expect(myMoneyServiceSpy).toHaveBeenCalled()
        expect(database).not.toBeNull
    })

    test('Default Command', async () => {
        try{
            myMoney.processLineAsCommand(' ', {} )
        } catch (err){
            expect(err).not.toBeNull()
        }
    })

    test('REBALANCE Command', async () => {
        database = {
            balances: [
              { equity: 6240, debt: 3300, gold: 1020 },
              { equity: 7416, debt: 6020, gold: 1520 },
              { equity: 10593, debt: 7897, gold: 2272 },
              { equity: 13600, debt: 8630, gold: 2966 },
              { equity: 17628, debt: 11652, gold: 3829 },
              { equity: 23619, debt: 11809, gold: 3936 },
              { equity: 25619, debt: 12809, gold: 4436 }
            ],
            mix: { equity: 0.6, debt: 0.3, gold: 0.1 },
            sip: { equity: 2000, debt: 1000, gold: 500 }
          }
        expect(helperSpy).toHaveBeenCalled()
        myMoney.processLineAsCommand('REBALANCE', database )
        expect(helperSpy).toHaveBeenCalled()
        expect(database).not.toBeNull()
    })

})