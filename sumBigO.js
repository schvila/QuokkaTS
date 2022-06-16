// O(n) Time Complexity is linear
const sumLoop = (num) => {
  result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};
// 500000000
const nr = 3;
start = performance.now();
res = sumLoop(nr);
end = performance.now();
console.log(end - start, res);

// O(1) Time Complexity is constant
const sumLinear = (num) => {
  return (num / 2) * (1 + num);
};

start = performance.now();
res = sumLinear(nr);
end = performance.now();
console.log(end - start, res);
