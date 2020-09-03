const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {


  let out='';

// str validation
  if (str ===undefined){
    return false
  }

  str===null ? str='null': str=str.toString()

  // options.repeatTimes validation
  if (options.repeatTimes===undefined ){
    return str+options.addition
  }


  //option addition validation
  options.addition===null ? options.addition='null' : ''


  if(Array.isArray(options.addition)){

    let addition=''
    options.addition=options.addition.join().split(',')
    addition=(options.addition+',,').repeat(options.additionRepeatTimes).slice(0,-2)
    addition=addition.split(',,').join(options.additionSeparator)

    out=str+addition
    out=(out+',,').repeat(options.repeatTimes).slice(0,-2)
    out=out.split(',,').join(options.separator)
    return out

  }


  if(options.addition!==undefined){
    let addition=''
    options.addition=options.addition.toString()
    addition=(options.addition+',').repeat(options.additionRepeatTimes).slice(0,-1)
    addition=addition.split(',').join(options.additionSeparator)


    out=str+addition
    out=(out+',').repeat(options.repeatTimes).slice(0,-1)
    return out.split(',').join(options.separator)
  }

  else if (options.separator){
    out=(str+',').repeat(options.repeatTimes).slice(0,-1)
    return out.split(',').join(options.separator)
  }

  else{
    out=(str+',').repeat(options.repeatTimes).slice(0,-1)
    return out.split(',').join('+')
  }


};
  