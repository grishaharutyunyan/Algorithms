function lowerBound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
  
  const arr = [1, 4, 4, 7, 8, 8, 9, 10, 11, 12, 13, 16, 19, 20, 22];
  console.log(lowerBound(arr, 8));