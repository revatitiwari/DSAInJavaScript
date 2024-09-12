var rowAndMaximumOnes = function(mat) {

    var count = 0;
    var Maxonerow = [];
    var counting;
    var rownum = 0;

    for(let row=0; row<mat.length ; row++) {
      counting = 0;
        for(let col=0; col<mat[row].length ; col++) { 
            if(mat[row][col] === 1) {
                counting++;
            }
        }
        //console.log(counting, count)
        if (counting > count) {
            count = counting;
            rownum = row;
        }
    }
    Maxonerow.push(rownum, count);
   
    return Maxonerow;
};

// Input = Input: mat = [[0,0,0],[0,1,1]] Output: [1,2]
// Input: mat = [[0,0],[1,1],[0,0]] Output: [1,2]
