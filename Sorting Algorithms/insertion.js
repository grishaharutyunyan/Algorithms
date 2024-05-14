function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key= arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            --j
        }
        arr[j + 1] = key;
    }
    return arr;
}

let arr1=[2,8,5,3,4];
insertionSort(arr1);
console.log(arr1)