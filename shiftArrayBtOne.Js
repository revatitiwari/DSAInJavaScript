//shift array by 1
// Input  [1, 2,3,4,6,7,8,90,4,5];
//Output [5, 1, 2,3,4,6,7,8,90,4];

function ShiftArray(arr){
    const res = [];
    for(let i=0; i<arr.length ;i++) {
        if(i === arr.length-1) {
            res.push(arr[0]);
        } else {
            res.push(arr[i+1]);
        }
    }
    
    return res;
}

const arr = [1, 2,3,4,6,7,8,90,4,5];

console.log(ShiftArray(arr));
