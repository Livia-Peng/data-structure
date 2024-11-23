/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    /*let low = 1;
    let high = n;
    while (low <= high) {
        const midNum = Math.floor((low + high) / 2);
        switch (guess(midNum)) {
            case 0:
                return midNum;
            case -1:
                high = midNum - 1;
                break;
            case 1:
                low = midNum + 1
                break;
            default:
        }
    }*/

    const rec = (low, high) => {
        const midNum = Math.floor((low + high) / 2);
        switch (guess(midNum)) {
            case 0:
                return midNum;
            case -1:
                return rec(low, midNum - 1);
            case 1:
                return rec(midNum + 1, high);
            default:
        }
    };
    return rec(1, n)
};
