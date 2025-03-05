// Create variables using var, let, and const. Explain the difference.
// What are the different data types in JavaScript? Give an example of each.
// Convert a string "123" to a number and a boolean.
// var g 
// let m

// var a = 20;
// // a = 20;

// let b = 0 ;
 // b = 4
 //const d;// const declration must be initialized.
// const c = 0;
//  c = 0; reassignment not possible 
// console.log(a,b,c)
 
// const v = 10;
// console.log(typeof(v))
 
// const v1 = 10.0;
// console.log(typeof(v1))

// const v2 = "hola";
// console.log(typeof(v2))


// let v4
// console.log(typeof(v4))

// let v5 = true
// console.log(typeof(v5)) 

// //

// // Convert a string "123" to a number and a boolean.

// let s = "123"
// console.log(s)
// console.log(typeof(s))
// // console.log(int(s))

// console.log(Number(s))
// console.log(parseInt(s))
// console.log(parseFloat(s))
// // typeof(s)
// console.log(Boolean(s))




// Write an if-else statement to check if a number is positive, negative, or zero.
// Create a switch statement to display the day of the week based on a number (1 = Monday, 2 = Tuesday, ...).


// const a = -7;
// if(a >0){
//     console.log("a is positive")
// }
// else if(a<0){
//     console.log("a is negative")
// }
// else{
//     console.log("a is zero (0)")
// }

// //

// let day = 1;
// switch(day){
//     case 1:
//         console.log("its monday")
//         break;

//     case 2:
//         console.log("its sunday")
//         break;
// }

// let is block-scoped, meaning it is only accessible within the {} block where it's defined.
// var is function-scoped, meaning it can lead to unexpected behavior if used in loops or blocks.



//


// Write a for loop to print numbers from 1 to 10.
// Create a while loop to calculate the factorial of a number.

// for(let i = 1; i<= 10; i++){
//     console.log(i)
// }

//
// let n = 5
// while(n>0){
//     console.log(n*(n-1))
//     n--;
// }

//  let n = 5;
//  let r =1;
//  let i = n;
//  while(i>0){
//     r *= i;
//     i--
//  }

//  console.log(r)

//  Write a simple function to add two numbers.
//  Convert the function to an arrow function.
//  
 function add(a,b){
    return a+b
 }
console.log(add(4,4))


add2 = (a,b) => a+b
console.log(add2(10,4))

add3 = (a,b,c) =>{
    return a+b+c
}
console.log(add3(3,3,3))

//
// Create an array of fruits and add a new fruit using .push().
// Create an object with properties name, age, and city and access the age property

fruits = ["apple", "mango" ,"orange"]
fruits.push("banana")
console.log(fruits);

person = {
    "key" :"values",
    "name": "Muskan",
    "age": "18",
    "city": "sagar"
}
 let n = person.name
 console.log(n)
console.log(person.age)



//

// Write fsa function that takes an age and returns whether the person is a child, teen, or adult.
// Create a function that returns the grade (A, B, C, D, F) based on a student's score using switch.
// let age = 20
function ageDetecter( age){
if(age>18){
    console.log("person is an adult")
}
else if(age>13 && age<18){
    console.log("person is a teenager")
}
else{
    console.log("that person is a child")
}
}
ageDetecter(15);

//
let grade = 'A';
switch(grade){
case 'A':
    console.log("grade is A")
    break;

case 'B':
    console.log("grade is B")
    break;
case 'C':
    console.log("grade is C")
    break
}


//

// Write a higher-order function that takes a number and a callback function to double it.
// Use setTimeout to log "Hello" after 2 seconds.

setTimeout(() => {
    console.log("hello")
}, 2000)

//
 
// Use .map() to create an array of squares from an array of numbers.
// Use .filter() to get only even numbers from an array.
// Use .reduce() to calculate the sum of numbers in an array.

// Create an object with a method that returns a greeting message.
// Use Object.keys() and Object.values() on an object and log the result.
// Create a simple prototype method that adds a method to all strings to capitalize the first letter.

let a = [1,2,3,4,5,6]
let nn = a.map(num => num*num);
console.log(nn);

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

const numbers1 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15




