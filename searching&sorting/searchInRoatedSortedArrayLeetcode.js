

// Complexity -O(log N)

var binarySearch = function(nums, start, end, target) {
    while(start <= end) {
        var mid = Math.floor((start+end)/ 2);
        if(nums[mid] == target) {
            return mid;
        }else if( nums[mid] < target) {
            start= mid+1;
        } else {
            end = end-1;
        }
    }
    return -1;
};

var findpivot = function(nums) {
    let start = 0;
    let end = nums.length-1;
    var mid = Math.floor((start+end)/ 2);

    while(start <= end) {
  
        if(start == end) {
            return start;
        }
        if(mid+1 <= end && nums[mid] > nums[mid+1] ) {
            return mid ;
        } else if (mid-1>= 0 && nums[mid] < nums[mid-1]){
            return mid -1;
        } else if(nums[start] >= nums[mid]) {
            end = mid;
        } else {
            start = mid + 1;
        }
         mid = Math.floor((start+end)/ 2);
    }
   
    return -1;
};

var search = function(nums, target) {
    let pivot = findpivot(nums);
    let n = nums.length;
    let ans = -1;

    if( target >= nums[0] && target <= nums[pivot]) {
        ans = binarySearch(nums, 0, pivot, target)
    } else {
        ans = binarySearch(nums, pivot+1, n-1, target)
    }
   return ans;
};
