function quickSort(arr,start=0, end= arr.length-1){
    if(start >= end){
        return ;
    }
     let pivot = arr[end];
    [arr[pivot], arr[end]] = [arr[end], arr[pivot]]
    let i = start-1;
    let j = start;
    for(j ; j < end ;j++){
        if(arr[j]< pivot){
          ++i;
        [arr[i],arr[j]] = [arr[j] ,arr[i]]
       }
    }
    ++i;
    [arr[i] ,arr[end]] = [arr[end],arr[i]]
    quickSort(arr, start, i-1)
    quickSort(arr, i+1 , end )

}

let arr = [4,67,5,89,32,3,54,76,973,4,0];
console.log(arr);
quickSort(arr);
console.log(arr);