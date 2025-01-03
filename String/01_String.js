const name="kanika"
const repoCount = 50

//console.log(name +repoCount +"Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// battic``
const gameName = new String('kanika')
console.log(gameName[0]);
console.log(gameName.__proto__) //object mil jata h 

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString= gameName.substring(0,4)// start number and ens number we have to give
console.log(newString)// last wala number count nhi hota jaise index 4 wala

const anotherString = gameName.slice(-6,4)
console.log (anotherString);

const newStringOne= "           kanika        "
console.log(newStringOne);
console.log(newStringOne.trim()); // starting and ending spaces ko remove krta h 

const url = "https://kanika.com/kanika%20budhiraja"
console.log(url.replace('%20',"-"))

console.log(url.includes('kanika'));
console.log(url.includes('kannu'));

console.log(gameName.split('-')) // array m split kr deta h string ko 