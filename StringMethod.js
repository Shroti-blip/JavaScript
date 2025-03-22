let str = "Muskan"
console.log(str.length)//properties thats why dont use ()
console.log(str.toLowerCase())//method ()
console.log(str.toUpperCase())
console.log(str.slice(2, 5))
console.log(str.replace("Musk", "abcd"))
console.log(str.concat("hola hola"))
let str2 = "          hola amiga     "
console.log(str2.substring(7, 14))
console.log(str2)
console.log(str2.trim())
console.log(str[0])//m
console.log(str[1])//u
console.log(str[2])
console.log(str[3])
console.log(str[4])
console.log(str[5])
console.log("-----------------------")
//printing a  string using loop .
for (let i = 0; i <= str.length; i++) {
    console.log(str.charAt(i))
}