// Find Minimum in 2D array 

function findMinimum(arr, rows, cols, target) {
    var min_ans= Infinity;
    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) { 
            if (arr[i][j] < min_ans) {
                min_ans = arr[i][j];
            }
             
        }
    }
    return min_ans;
}

let arr = [ [ '50', '10', '20' ], [ '9', '378', '40' ], [ '89', '90', '78' ] ];
console.log(findMinimum(arr, 3,3,40));