
// Check Prime Number:
// Create a function declaration that checks if a given number is a prime number.


function isPrime(n){
   if(n<2){
      console.log("n is a composite number")
      return;
   }

   for(let i = 0; i<=n/2; i++){
      if(n%i==0){
         console.log(n+" is not a prime number");
         return;
      }
      else{
         console.log("n is a prime number")
      }
   }
}
 isPrime(12)


//  console.log(Math.sqrt(19))