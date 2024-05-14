function upperBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left - 1;
  }
  
  const arr = [1, 2, 2, 2, 3, 4, 5, 5, 6, 7];
  console.log(upperBound(arr, 2));