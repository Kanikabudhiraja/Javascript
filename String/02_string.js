// Num and Maths
const score = 400
const balance = new Number(100) // new object type 
console.log(balance)
console.log(score)

console.log(balance.toString().length);
console.log(typeof balance)
console.log(balance.toFixed(2)) // point k baad utne number jitne hm tofixed m daalenge

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3)); // priority decimal s phle walo ko milti h 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// **************** Maths ***************************** */
console.log(Math)
console.log(Math.abs(-4)) // -ve to +ve
console.log(Math.round(4.3)) // round off

console.log(Math.ceil(4.2)) //top value(heighest value)
console.log(Math.floor(4.2)) //lowest value it will take
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random()) //random value b/w 0-1
console.log((Math.random()*10) +1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min +1)))