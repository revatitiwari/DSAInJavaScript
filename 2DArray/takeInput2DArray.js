//take input for 2d array in javascript

function getInput() {
    let rows = parseInt(prompt("Enter number of rows:"));
    let cols = parseInt(prompt("Enter number of columns:"));
    let arr = [];

    for(let i=0; i<rows; i++) {
        arr[i] = [];
        for(let j=0; j<cols; j++) { 
            arr[i][j] = prompt(`Enter the number for ${i} and ${j} element : `)
        }
    }

    return arr;
}

let gettingInput = getInput();
console.log(gettingInput);