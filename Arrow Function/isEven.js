// Check Even or Odd:
// Create an arrow function that takes a number as input and returns "Even" or "Odd".

// const isEven = (num) =>{
//     if(num%2==0){
//     console.log("num is even")
//     }
//     else{
//         console.log("num is odd")
//     }
// }
// isEven(16)

const isEven = (num) => {
    if(num%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(10))