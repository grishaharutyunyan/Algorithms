var nextPermutation = function (nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[i] >= nums[j]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let left = i + 1, right = nums.length - 1;
    while (left < right) { 
        [nums[left], nums[right]] = [nums[right], nums[left]]; 
        left++;
        right--;
    }
};


const ex1 = [1, 2, 3, 5, 9, 7, 6, 5, 4, 2, 1];
const ex2 = [1, 2, 3];
const ex3 = [3, 2, 1];

nextPermutation(ex1);
nextPermutation(ex2);
nextPermutation(ex3);

console.log(ex1); 
console.log(ex2); 
console.log(ex3); 
