// Create an object with a method that returns a greeting message.


//An object is a collection of key-value pairs, where:


function greet(){
    console.log("welcome to js")
}

 const person = {
    greet:greet,
name:"muskan",
age:"18",
address:"sagar"
}

console.log(person.address)
// console.log(person.greet())
person.greet()

// A function is an independent block of code that performs a specific task. It is not associated with any object 
// and can be called anywhere in the code (if it's in the correct scope).

// A method is a function that is defined as a property of an object. It is associated with the object and is called using the object's reference.


// When you define an object with a method without using const, let, or var, it might not throw an error immediately, but that's because of how
//  JavaScript handles global variables.

 const person2 = {
    name:"Khushi",
    greet(){
        return `hello ${this.name}`;
       // console.log("welcome to my paradaise")
    }
    
 }

 console.log(person2.greet())



// // Use Object.keys() and Object.values() on an object and log the result.

const Animal = {
    Human:"worst",
    Dogs:"cute",
    cat:"sassy Queen",
    Penguin:"gentelman",
    Birds:"beautiful",
    Panda:"Buddy"
}

console.log(Object.keys(Animal))
// console.log(Animal.values())
console.log(Object.values(Animal))


// Create a simple prototype method that adds a method to all strings to capitalize the first letter.

//mistake  charAt function direct use nhi karte
// function captialize(){
//    return charAt(0).toUpperCase()
// }

// const string = "hola amigo"
// captialize()

function captial(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const string = "hola"
console.log(captial(string))

// console.log(string.slice(1));   // Output: "ola amigo"

// Concatenated the Remaining String: Using str.slice(1) to get the rest of the string and combine it with the capitalized first letter.


// //

// 