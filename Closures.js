//scopes

function outerFunct(outVar ) {
  return function innerFunc(inVar) {
    console.log(`outvar: ${outVar}`)
    console.log(`invar: ${inVar}`)
  }
}

const newFunction = outerFunct('outside');
newFunction('inside'); 