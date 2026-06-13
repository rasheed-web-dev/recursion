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

function fibRec(nth) {
  if (nth == 1) {
    return [0];
  }
  if (nth == 2) {
    return [0, 1];
  }
  return fibRecHelper(nth);
}

function fibRecHelper(nth, ans = [0, 1], step = 2) {
  console.log("This was printed recursively");
  if (nth == step) {
    return ans;
  }
  const newNumber = ans.at(-1) + ans.at(-2);
  ans.push(newNumber);
  return fibRecHelper(nth, ans, step + 1);
}

console.log(fib(1));
let test = fibRec(8);
console.log(test);
