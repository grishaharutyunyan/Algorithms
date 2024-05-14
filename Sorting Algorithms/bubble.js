function bubbleSort(arr){
    for(let i = 0 ; i < arr.length-1 ;++i){
        for(let j = 0 ;j < arr.length - 1 - i ; ++j){
            if(arr[j] > arr[j+1]){
             let temp = arr[j];
             arr[j] = arr[j+1];
             arr[j+1] = temp
            }
        }
    }
    return arr;
}


let arr1=[2,5,4,6,1,3,9,8,7,];
bubbleSort(arr1);
console.log(arr1);



