const arr = new Array(23, -1, -11, 8, 9 ,0, -2, -9, 45, 88);

// arr.sort();

// console.log(arr);
var j=0;
for(let i=0; i<arr.length; i++) {
    if(arr[i]<0) {
        const tmp = arr[i];
        arr[i]=arr[j];
        arr[j]=tmp;
        j++;
    }
}

console.log(arr);