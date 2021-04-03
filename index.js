var finances = function() {};

finances.prototype.compoundInterest = (
    principal,
    rate,
    numberOfTimesInterestIsCompounded,
    numberOfYears,
    options
) => {
    if (options === "oncePerPeriod") {
        const rateDivided = rate / 100;
        const firstBlock = 1 + rateDivided / numberOfYears;
        const raisedToPower = Math.pow(firstBlock, numberOfYears);
        const amount = principal * raisedToPower;
        const CI = amount - principal;
        return Math.round(CI);
    } else {
        const rateDivided = rate / 100;
        const firstBlock = 1 + rateDivided / numberOfYears;
        const secondBlock = numberOfTimesInterestIsCompounded * numberOfYears;
        const raisedToPower = Math.pow(firstBlock, secondBlock);
        const amount = principal * raisedToPower;
        const CI = amount - principal;
        return Math.round(CI);
    }
};

finances.prototype.postTaxReturn = (interestRate, taxRate) => {
    const taxRateDivided = taxRate / 100;
    const firstBlock = taxRateDivided * interestRate;
    const taxReturn = interestRate - firstBlock;
    return taxReturn;
};

finances.prototype.inflation = (
    presentAmount,
    inflationRate,
    numberOfYears
) => {
    const inflationRateDivided = inflationRate / 100;
    const firstBlock = 1 + inflationRateDivided;
    const secondBlock = Math.pow(firstBlock, numberOfYears);
    const futureAmount = presentAmount * secondBlock;
    return Math.round(futureAmount);
};

finances.prototype.purchasingPower = (
    presentAmount,
    inflationRate,
    numberOfYears
) => {
    const inflationRateDivided = inflationRate / 100;
    const firstBlock = 1 + inflationRateDivided;
    const secondBlock = Math.pow(firstBlock, numberOfYears);
    const futureValue = presentAmount / secondBlock;
    return Math.round(futureValue);
};

finances.prototype.breakEvenPoint = (
    fixedCost,
    salesPrice,
    variableCostPerUnit
) => {
    const firstBlock = fixedCost / salesPrice;
    const breakEvenVolume = firstBlock - variableCostPerUnit;
    return Math.round(breakEvenVolume);
};

finances.prototype.cashRatio = (cash, currentLiabilities) => {
    const cashRatioValue = cash / currentLiabilities;
    return Math.round(cashRatioValue);
};

finances.prototype.profitMargin = (netIncome, sales) => {
    const profitMarginValue = netIncome / sales;
    return Math.round(profitMarginValue);
};

finances.prototype.debtToEquity = (totalLiabilities, totalEquity) => {
    const debtToEquityRatio = totalLiabilities / totalEquity;
    return Math.round(debtToEquityRatio);
};

finances.prototype.costOfGoods = (costOfMaterials, costOfOutput) => {
    const costOfGoodsSold = costOfMaterials - costOfOutput;
    return Math.round(costOfGoodsSold);
};

finances.prototype.retainedEarnings = (
    beginningRetainedEarnings,
    netIncome,
    cashDividends
) => {
    const firstBlock = beginningRetainedEarnings + netIncome;
    const retainedEarningsValue = firstBlock - cashDividends;
    return Math.round(retainedEarningsValue);
};

module.exports = new finances();