//Fibonacci series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

const FibonacciNumber = (n) => {
    const arr = [0,1];
    for (let i=2 ; i<=n ; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[n];
}

console.log(FibonacciNumber(13));

const fib = (n) => {
   if(n<=1) {
    return n;
   }
   return fib(n-1)+fib(n-2);
}

const fibonacci = (n) => (n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2));
