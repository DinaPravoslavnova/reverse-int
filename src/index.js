module.exports = function reverse(n) {
    const stringArray = Math.abs(n).toString().split("");
    const reverseStringArray = stringArray.reverse();
    const resultString = reverseStringArray.join("");
    const resultReverse = Number(resultString);
    return resultReverse;
};
