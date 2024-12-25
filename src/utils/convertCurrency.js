const convertCurrency = (amount, fromRate, toRate) => {
    return (amount / fromRate) * toRate;
};

export default convertCurrency;