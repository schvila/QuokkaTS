function fib1(n) {
  if(n <= 2) {
    return 1
  } else {
    return fib1(n -1) + fib1(n - 2);
  }
}


//fib1(5) //?
fib1(8) //?
//fib1(500) //?
//fib1(51) //?

function fib(n, prevValues = []) {
  if(prevValues[n] != null) { 
    prevValues //?
    return prevValues[n]
  }
  let result
  if(n <= 2) {
    result =  1
  } else {
    result =  fib1(n -1, prevValues) + fib1(n - 2, prevValues); //?
  }
  prevValues[n] = result
  return result;
}

//fib(8) //?
fib(8) //?
//fib(500) //?
//fib(51) //?

function fib3(n) {
  const numbers = [1,1];
  let sum = 0
  for(let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1])
    sum += numbers[i - 2] + numbers[i - 1] 
  }
  numbers //?
  sum
  return numbers[n]
}

fib3(4) //?