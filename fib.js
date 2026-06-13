function fib(nth) {
  if (nth == 1) {
    return [0];
  }
  if (nth == 2) {
    return [0, 1];
  }
  let ans = [0, 1];
  let first = 0;
  let second = 1;
  let third;
  for (let i = 0; i < nth - 2; i++) {
    third = first + second;
    ans.push(third);
    first = second;
    second = third;
  }
  return ans;
}

console.log(fib(8));
