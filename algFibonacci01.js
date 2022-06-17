function fib1(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fib1(n - 1) + fib1(n - 2);
  }
}
const nr = 20;
//fib1(5) //?
console.log(fib1(nr));
//fib1(500) //?
//fib1(51) //?

function fib(n, prevValues = []) {
  if (prevValues[n] != null) {
    prevValues; //?
    return prevValues[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
  }
  result;
  prevValues[n] = result;
  prevValues; //?
  return result;
}

//fib(8) //?
console.log(fib(nr)); //?
//fib(500) //?
//fib(51) //?

function fib3(n) {
  const numbers = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }
  numbers; //?
  return numbers[n];
}

fib3(8); //?
