function bsrecursice(arr,target,start=0 ,end=arr.length-1){
    if(start > end){
        return -1
    }

    let mid = Math.floor((start+end)/2);

    if(arr[mid]=== target){
        return mid;
    }else if (arr[mid] < target){
        return bsrecursice(arr,target,mid+1,end)
    }else{
        return bsrecursice(arr,target, start ,mid-1)
    }
}

console.log(bsrecursice([1,2,3,4,5],6))