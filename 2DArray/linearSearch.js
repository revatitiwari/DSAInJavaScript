//Linear search in 2D array

function linearSearch(arr, rows, cols, target) {
    for(let i=0; i<rows; i++) {
        for(let j=0; j<cols; j++) { 
            if (arr[i][j] == target) {
                return true;
            }
             
        }
    }
    return false;
}

let arr = [ [ '50', '0', '20' ], [ '9', '378', '40' ], [ '89', '90', '78' ] ];
console.log(linearSearch(arr, 3,3,40));