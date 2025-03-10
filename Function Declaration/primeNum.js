
// Check Prime Number:
// Create a function declaration that checks if a given number is a prime number.

function prime(n){
   if(n<2){
      console.log("n is not a prime number")
      return;
   }
   for(let i = 2; i<=Math.sqrt(n);i++){
    if(n%i==0){
        console.log("n is not a prime number")
        return ;
    }

   }
  console.log(n +  "is prime number ")

}

prime(67)



