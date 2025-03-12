// Calculate Factorial:
// Write a function expression to calculate the factorial of a given number.

// const factorial = function (){
// if(n=1){
//     return 1;
// }
// let c ;
// c = n*n-1
// console.log(c)
// }

// factorial(5)


const factorial = function (n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1)//function calling again and again.
}

console.log(factorial(5))