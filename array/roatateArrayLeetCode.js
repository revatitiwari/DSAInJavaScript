
// nums = [1,2,3,4,5,6,7] // k=3
// nums = [-1,-100,3,99], k=2

var rotate = function(nums, k) {
    let length = nums.length;
    let arr = [];

    for(let i=0; i<length; i++) {
        var newIndex = (i+k) % length;
        arr[newIndex] = nums[i]; 
    }

    for (let i = 0; i < length; i++) {
        nums[i] = arr[i];
    } 
};