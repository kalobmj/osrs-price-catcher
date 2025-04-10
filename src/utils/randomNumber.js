// randomNumber excluding num passed
export const randomNumber = (max, min) => {
    if (min === undefined) {
        return Math.floor(Math.random() * max);
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// randomNumber excluding num passed & length passed to determine range
export const randomNumberExcluding = (numToExclude, length) => {
    let returnNum = numToExclude;

    while (returnNum === numToExclude) {
        returnNum = randomNumber(length)
    };

    return returnNum;
};