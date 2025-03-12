// / Find Maximum in Array:
// Write a function expression that takes an array of numbers and returns the maximum value.


const max = function(){
    let n = 0
 let arr = [1,22,3,456,5];
 for(let i =0; i<arr.length; i++){
    if(arr[i]>n){
        n =arr[i]   
    }
 }
 console.log(n)
}
max()