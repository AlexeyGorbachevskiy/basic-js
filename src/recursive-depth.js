const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    calculateDepth(arr) {
        let maxCount = 1;
        for (let el of arr) {
            let count = 1;
            if (Array.isArray(el)) {
                count = count + this.calculateDepth(el)
                if (count > maxCount) {
                    maxCount = count;
                }
            }

        }
        return maxCount
    }
};