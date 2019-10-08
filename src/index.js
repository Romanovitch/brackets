module.exports = function check(str, bracketsConfig) {
  function oneReplacer(str, myConf){
    myConf.forEach(iBrts => str = str.replace(iBrts, ""));
    myConf.forEach(iBrts => (str.includes(iBrts) 
      ? str = oneReplacer(str, myConf) 
      : str))
    return str;
  }    
  var myConf = bracketsConfig.map(iArr => iArr.join(""));
  return !oneReplacer(str, myConf).length ? true : false;
}
