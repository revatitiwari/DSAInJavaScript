
// printing a 2D array
let a = "";
function printArr(arr, row, col) {
    for(i=0; i<row ; i++) {
        for(j=0; j<col ; j++) {
            a = a+arr[i][j]+" "
         }
    console.log(a);
    a = "";
    }
}

let arr = [3][3];

arr = [[1,2,3],[1,2,3],[7,8,9]];
console.log(printArr(arr, 3, 3));
console.log(arr);

//output
// 1 2 3 
// 1 2 3 
// 7 8 9 
// undefined
// [ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 7, 8, 9 ] ]
