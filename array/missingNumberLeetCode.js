
// In = [0,1] o/p= 2

var missingNumber = function(nums) {
    range = nums.length;
    nums.sort((a,b) => a-b);

    for(let i=0; i<range ; i++) {
        if(nums[i] !== i) {
            return i;
        } 
    }
    return range;
    
};