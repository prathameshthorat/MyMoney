const balancePortfolioMix = (database) => {
    const data = database
    data.balances.pop()
    const currentBalance = data.balances.pop()
    // balance portfolio
    const total = currentBalance.equity + currentBalance.debt + currentBalance.gold
    Object.keys(currentBalance).forEach(
      (commodity) => {
        currentBalance[commodity] = Math.floor(data.mix[commodity] * total)
      },
    )
    data.balances.push(currentBalance);
    const nextMonth = {};
    Object.keys(currentBalance).forEach(
        (commodity) => {
            nextMonth[commodity] = currentBalance[commodity] + data.sip[commodity]
        },
    )
    data.balances.push(nextMonth);
} 

module.exports = {
    balancePortfolioMix
}