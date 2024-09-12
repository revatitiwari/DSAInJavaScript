
//Input: matrix = [[1,2,3],[4,5,6],[7,8,9]] Output: [[7,4,1],[8,5,2],[9,6,3]]

var rotate = function(matrix) {
    let len = matrix.length;
    
    for(let row =0; row<len; row++){
       for(let col = 0; col<row; col++){ 
         let tmp = matrix[row][col];
         matrix[row][col] = matrix[col][row];
         matrix[col][row] = tmp;
       }
    }
    
    for(let row =0; row<len; row++){
       matrix[row].reverse();
    }
    return matrix;
  };