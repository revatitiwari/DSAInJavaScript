function processLogs(logs, threshold) {
    const result = logs.map(item => {
    return item.split(" ").map(Number); // Split by space and convert to numbers
    });
      let ans = result.flat();
      let duplicate = {};
      
      for(let i=0; i<ans.length; i++){
        duplicate[ans[i]] = (duplicate[ans[i]]  || 0) +1;
      }
      
      let res = Object.keys(duplicate).filter(num => duplicate[num]>=threshold).map(Number);
      
      return res;
  }
  
   console.log(processLogs(["1 2 1000"], 1))
  
  //console.log(containsDuplicate([1,2,3,4]))