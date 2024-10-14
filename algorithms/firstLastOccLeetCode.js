/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans =[-1,-1];
    let l =0;
    let r = nums.length-1;
  while(l<=r){
     let mid = Math.floor((l+r)/2);
     if(nums[mid] == target){
         ans[0] = mid;
         r = mid-1
     } else if(nums[mid] < target){
         l = mid+1
     }else{
         r = mid-1;
     }
  }

     l =0;
     r = nums.length-1;
  while(l<=r){
     let mid = Math.floor((l+r)/2);
     if(nums[mid] == target){
         ans[1] = mid;
         l = mid+1
     } else if(nums[mid] < target){
         l = mid+1
     }else{
         r = mid-1;
     }
  }
 return ans;
};

console.log(searchRange([3,3,3,3], 3))