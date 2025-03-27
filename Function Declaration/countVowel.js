// Count Vowels in a String:
// Write a function declaration that takes a string and returns the number of vowels in it.

function countVowel(s){
    
    let word = "abstract"
   let  count = 0;
    for(let i = 0; i<=word.length; i++){
        if(word.charAt(i)=='a'|| word.charAt(i)=='e'|| word.charAt(i)=='i'||word.charAt(i)=='o'||word.charAt(i)=='u'){
            count++;
        }
    }
    if(count >0){
        console.log("Vowel does exist here and there are total vowel = "+ count)
    }
   
}
 countVowel("Hola");


 console.log(typeof "Hello".length); // "number" (it's a property)
 console.log(typeof "Hello".toUpperCase); // "function" (it's a method)
 
//  length is a property of a string (or an array), not a method.

//  A property holds a value (like a variable inside an object).
 
//  A method is a function inside an object, and you must call it using ().


