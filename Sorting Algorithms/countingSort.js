function CountingSort(arr, k) {
    const count = [];

    for (let i = 0; i < arr.length; ++i) {
        count[arr[i]] = (count[arr[i]] || 0) + 1;
    }

    for (let i = 1; i < k; ++i) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        count[arr[i]] -= 1;
    }

    return count;
}

const arr = [4, 3, 1, 2, 0];
console.log(CountingSort(arr, 5));