// Date 
//date are calculated in milliseconds 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate) //date k object h

// let myCreatedDate= new Date("03-01-2024")
// console.log(myCreatedDate.toDateString())
// let myCreatedDate= new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleDateString())

let myTimeStamp = Date.now() // jb hm poll create create krte y quiz type application m 
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))


let newdate = new Date()
console.log(newdate.getDay())
console.log(newdate.getMonth()+1)

newdate.toLocaleDateString('default',{
    weekday:"long",
    
})