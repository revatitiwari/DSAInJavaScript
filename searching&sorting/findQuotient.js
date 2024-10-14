
// find Quotient using binary search 
// Complexity O(log n)

var findDividend = function (dividend , divisor) {
  
    let start = 0;
    let end = dividend;
    let ans =-1;
    
    while(start<=end) {
      
      let mid = Math.floor((start + end) /2);
      
      if(mid * divisor == dividend) {
        return mid;
      } if( mid * divisor < dividend) {
        ans = mid;
        start = mid +1;
      } else {
        end = mid-1;
      }
    }
    return ans;
    
  }
  
  let dividend = -26;
  let divisor = 2;
  let ans = findDividend(Math.abs(dividend), Math.abs(divisor));
  
  if(dividend < 0 || divisor < 0 && (dividend < 0 && divisor<0)) {
    ans = - ans;
  }
  
  console.log(ans);