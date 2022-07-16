const myMoneyHelper = require('../myMoney')

describe('Testing myMoneyHelper', () => {
    let database = {}
    test('', () => {
        database = {
            balances: [
              { equity: 6240, debt: 3300, gold: 1020 },
              { equity: 7416, debt: 6020, gold: 1520 },
              { equity: 10593, debt: 7897, gold: 2272 },
              { equity: 13600, debt: 8630, gold: 2966 },
              { equity: 17628, debt: 11652, gold: 3829 },
              { equity: 23619, debt: 11809, gold: 3936 },
              { equity: 21590, debt: 13664, gold: 4112 },
              ''
            ],
            mix: { equity: 0.6, debt: 0.3, gold: 0.1 },
            sip: { equity: 2000, debt: 1000, gold: 500 }
        }
        
        myMoneyHelper.balancePortfolioMix(database)
        expect(database.balances[6].equity).toBe(23619)
        expect(database.balances[6].debt).toBe(11809)
        expect(database.balances[6].gold).toBe(3936)
    })
})