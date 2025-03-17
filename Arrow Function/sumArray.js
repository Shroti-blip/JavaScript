
let arr = [1,2,4,65,6,7]

const sumarr = (arr)=> {
    let sum = 0
    for(let i =0; i<arr.length; i++) // length is a property not a function so we dont use ().
    {
        sum += arr[i];

    }
    console.log(sum)
}

sumarr(arr)// arguement is important.