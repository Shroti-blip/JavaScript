// Fibonacci Series:
// Write a function declaration that takes a number n and prints the first n numbers of the Fibonacci series.

function fibonachi(n){
    let a =0 , b =1,store;
    if(n<1){
        console.log("enter a positive number")
        return 
    }
    console.log("this is a fibonachhi series.")

    for(i=1 ; i<=n; i++){
        console.log(a)
        store = a+b;
        a=b;
        b=store;
        // console.log(store);
    }
   
    
    
    
}
fibonachi(6)
