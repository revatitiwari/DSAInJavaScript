// Selection sort in Javascript

var selectionSort = function(arr) {
    let len = arr.length;
    
    for(let i=0; i<len-1; i++) {
      let minIndex = i;
      for(let j=i+1; j<len; j++) {
        if(arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      } 
      let tmp = arr[i];
          arr[i] = arr[minIndex];
          arr[minIndex] = tmp;
    }
    return arr;
  }
  
  console.log(selectionSort([5,3,2,4,7,1]))