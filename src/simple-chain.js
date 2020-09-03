const CustomError = require("../extensions/custom-error");

let out = [];
const chainMaker = {

  getLength() {
    return out.length
  },
  addLink(value) {

    if (value!==undefined) {
      out = [...out, `( ${value} )`];
    } else {
      out = [...out, `( )`];
    }

    return this
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      out=[]
      throw new Error()
    }
    out.splice(position - 1, 1)

    return this
  },
  reverseChain() {
    if (out.length > 1) {
      out = out.join().replace(/~~/g, '').split(',')
      out.reverse()
    }

    return this
  },
  finishChain() {

    const res=out.join('~~');
    out = [];
    return res

  }
};


module.exports = chainMaker;
