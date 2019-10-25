const inputRange = [false,null,NaN,Infinity,0,1,'a']
const arrAtoZ = [...Array(26)].map(_=>(++i).toString(36),i=9) // array of chars a to z in alphabetical orde
const arrTypes = [false,null,NaN,Infinity,0,1,'z',{},'',[]]

module.exports = {inputRange,arrAtoZ,arrTypes}
