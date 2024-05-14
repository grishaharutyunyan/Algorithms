function selectionSort(arr){
    for(let i = 0 ; i < arr.length-1; i++){
        let min = i;
        for(let j = i + 1 ; j < arr.length ;j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let arr1 = [2,5,4,3,5,8,1];
selectionSort(arr1);
console.log(arr1)