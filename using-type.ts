type CombineNumStr = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';


const combine = (input1: CombineNumStr, input2: CombineNumStr, resultConversion: ConversionDescriptor) : CombineNumStr => {
  let result: CombineNumStr;
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

combine('5','6', 'as-number'); //?
combine(6,20, 'as-text'); //?