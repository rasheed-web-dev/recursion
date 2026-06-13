function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const arr = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else {
      arr.push(right[j]);
      j++;
    }
  }
  if (i < left.length) {
    let newArr = left.slice(i);
    arr.push(...newArr);
  } else {
    let newArr = right.slice(j);
    arr.push(...newArr);
  }
  return arr;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
