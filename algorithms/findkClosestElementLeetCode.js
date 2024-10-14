/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

// Two pointer method

var twoPointerMethod = function(arr, k, x) {
    let low= 0;
    let high = arr.length-1;
    
    while(high-low >= k) {
        if(arr[high]-x < x-arr[low]) {
            low++;
        } else {
            high--;
        } 
    }
    
    let ans = [];
    for(let i=low ; i<=high; i++) {
        ans.push(arr[i]);
    } 
    return ans; 
}

var findClosestElements = function(arr, k, x) {
    let ans = twoPointerMethod(arr, k, x);
    return ans; 
};

// Binary Search method

var lowerBound = function(arr, target) {
    let s = 0;
    let e = arr.length-1;
    let ans = e;
    

    while(s<=e) {
        let mid = Math.floor((s+e)/2);
        if(arr[mid] >= target) {
            e = mid-1;
            ans= mid;
        } else if(arr[mid] < target) {
            s = mid + 1;   
        } else {
            e = mid-1;
        }
    }
    return ans;
}

var BinaryMethod = function(arr, k, x) {
    let high = lowerBound(arr, x);
    let len =k;
    let low= high-1;
    
    
    while(k--) {
     
        if(low<0 ){
          high++;
        } else if(high >= arr.length) {
          low--;
        } else if(arr[high]-x < x-arr[low]) {
            high++;
        } else {
          low--;
        }
         
    }
    
    
    if (low<0){
      low =0;
    }
   let ans = arr.slice(low, high);
    if(ans.length > len) {
       ans = ans.slice(1);
    }
  
    return ans;
}

var findClosestElements = function(arr, k, x) {
    let ans = BinaryMethod(arr, k, x);
    return ans; 
};