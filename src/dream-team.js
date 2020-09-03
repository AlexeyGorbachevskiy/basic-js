const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here


    if (typeof members !== 'object' || members === null) {
        return false
    }
    let out = [];

    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            out = [...out, members[i].split(' ').join('')[0].toUpperCase()]
        }
    }


    return out.sort().join('')
};
