var bubbleSort = function(arr) {
    let len = arr.length;
    
    for(let i=0; i<len-1; ++i) {
      for(let j=0; j<len-i-1; ++j) {
        if(arr[j] > arr[j+1]) {
          let tmp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = tmp;
        }
      } 
    }
    return arr;
  }
  
  console.log(bubbleSort([5,3,2,4,7,1]))