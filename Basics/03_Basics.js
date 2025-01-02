// Conversion Operations
//Conversion oF datatype

let score = "18abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//NaN --> special type 
// "33"=> 33
// "33abc" => NaN
// true =>1; false=> 0

let isLoggedIn = ""
let booleanisLoggeIn = Boolean(isLoggedIn);
console.log(booleanisLoggeIn)

// 1= true
// 0= false
// empty("") = false
// "kanika" =true

let someNumber= 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber)