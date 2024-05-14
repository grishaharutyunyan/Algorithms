function mergeSort(arr){
    if(arr.length <= 1 ){
        return arr;
    }
    let mid = Math.floor((arr.length) / 2)
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right))
 }


function merge(left,right){
        let res = [];
        let leftIndex = 0;
        let rightIndex = 0;
        
        while(leftIndex < left.length && rightIndex < right.length){
            if(left[leftIndex] < right[rightIndex]){
                res.push(left[leftIndex]);
                leftIndex++ 
            }else {
                res.push(right[rightIndex]);
                rightIndex++ 
            }
        }
        return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
 }

 let arr1 = [1,4,3,2,9,8,7,6,5];
 console.log(arr1);
 let sortedarr = mergeSort(arr1);
 console.log(sortedarr);