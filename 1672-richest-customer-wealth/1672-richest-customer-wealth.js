/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function (accounts) {
    let max = 0;
    let maxCurr = 0;
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            maxCurr += accounts[i][j];
        }
        if (max < maxCurr) {
            max = maxCurr;
        }
        maxCurr = 0;
    }
    return max;
};