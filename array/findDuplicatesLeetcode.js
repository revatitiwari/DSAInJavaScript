var findDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    
    for(let i=0; i< nums.length; i++) {
      if(nums[i] === nums[i+1]) {
        return nums[i];
      }
    }

    return -1;
};


// example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3
