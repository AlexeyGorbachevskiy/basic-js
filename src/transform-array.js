const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here


    if (typeof arr !== 'object' || arr === null) {
        throw new Error();
    }

    let out = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === '--discard-next') {
            if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
                i += 2
            } else {
                i++
            }
        } else if (arr[i] === '--discard-prev') {
            if (i > 0) {
                out.pop()
            }
        } else if (arr[i] === '--double-next') {
            if (i < arr.length - 1) {
                out = [...out, arr[i + 1]]
            }
        } else if (arr[i] === '--double-prev') {
            if (i > 0)
                out = [...out, arr[i - 1]]

        } else {
            out = [...out, arr[i]]
        }
    }
    return out

};
