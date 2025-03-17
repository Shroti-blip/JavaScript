

// const reverseString = (str) => str.split('').reverse().join('');

// console.log(reverseString("hello")); // Output: "olleh"

let  a = "Hola Amiga";
const reverse = (a) => {
    rev = ""
   for(let i = a.length-1 ; i>=0; i--){
    rev += a[i]
   }
   console.log(rev)
}

reverse(a)