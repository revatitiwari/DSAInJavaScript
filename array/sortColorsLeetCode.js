
// sort [2,0,1]
// sort colors leet code problem solution

var sortColors = function(nums) {
    var index = 0;
    var j = 0;
    var k = nums.length-1;
    while(index <= k)  {
        if(nums[index] === 0) {
            const tmp = nums[index];
            nums[index] =  nums[j];
            nums[j] = tmp;
            index++;
            j++;
        } else if (nums[index] === 2) {
            const tmp2 = nums[index];
            nums[index] =  nums[k];
            nums[k] = tmp2;
            k--;
        } else {
            index++;
        }
    }
};