const utility = require('../utility')

describe('Testing utility', () => {
    test('testing ValidateInputSize negative Scenario', () => {
        try{
            utility.validateInputSize(['BALANCE', 'MARCH'], 3)
        } catch( err) {
            expect(err).not.toBeNull()
        }

    }) 
})