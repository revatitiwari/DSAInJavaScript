function priceCheck(products, productPrices, productSold, soldPrice) {
  
    let ans = new Map();
    let count = 0;
    
    for(let i=0; i<products.length; i++) {
      ans.set(products[i] ,productPrices[i]);
    }
    
    for(let i=0; i<productSold.length; i++) {
     if(ans.get(productSold[i]) !== soldPrice[i]) {
       count++;
     }
    }
    
    
    
   return count;
      
  }
  
   console.log(priceCheck(['rice', 'sugar', 'wheat', 'cheese'], [16.89, 56.92, 20.89, 345.99], ['rice', 'cheese'], [18.99, 400.89]))
  
  //console.log(containsDuplicate([1,2,3,4]))