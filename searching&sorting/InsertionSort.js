
var InsertionSort = function(arr) {
    let len = arr.length;
    let i= 1;
    
    while(i<len) {
      
      let key = arr[i];
      let j = i-1;
      
      while(j>=0 && arr[j] > key )  {
        arr[j+1] = arr[j];
        j--;
      }
      arr[j+1] = key;
      i++;
    }
    return arr;
  }
  
  console.log(InsertionSort([5,3,2,4,7,1]))