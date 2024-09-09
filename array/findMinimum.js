

function findMinimum(arr) {
    let min_ans = Infinity;
    for(let i=0; i< arr.length ; i++) {
        if( min_ans > arr[i]) {
            min_ans = arr[i];
        }
    }
    return min_ans;
}

let arr = [ 10,30,40,90,6,89,9,3,56 ];
console.log(findMinimum(arr));

//method 2

function findMinMaxUsingSort() {
    let Arr = [50, 60, 20, 10, 40];

    // Sort array in ascending order
    Arr.sort((a, b) => a - b);
    let minValue = Arr[0]; // First element after sorting is the minimum

    // Sort array in descending order
    Arr.sort((a, b) => b - a);
    let maxValue = Arr[0]; // First element after sorting is the maximum

    console.log("Minimum element is:" + minValue);
    console.log("Maximum Element is:" + maxValue);
}

findMinMaxUsingSort();
