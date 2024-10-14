
// K-diff Pairs in an Array Leet code problem

var findPairs = function(nums, k) {
    let len = nums.length;
    let i= 0;
    let j= i+1;
    let count =0;
    nums.sort((a,b)=> a-b);
    let ans = new Set();

    while(j<len) {
        let diff = nums[j]- nums[i];
       if(diff == k) {
        ans.add(nums[i], nums[j]);
        i++;
        j++;
       } else if(diff> k ) {
        i++;
       } else {
        j++;
       }
       if (i==j) {
        j++;
       } 
    }
    return ans.size;  
};

