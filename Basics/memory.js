// mmeoryspace 

// stack (permitive) --> variable k copy milta h 
// Heap(non primitive) -->  variable decalre hota tha toh orginal value k refrence milta h aur jo bhi chnages hote h vo original value m bhi reflect hota h 

// let myYoutubename="kanikabudhiraja"
// let anothername= myYoutubename
// console.log(myYoutubename)
// console.log(anothername);

let myYoutubename="kanikabudhiraja"
let anothername= myYoutubename
anothername= "techwithKANIKA"
console.log(myYoutubename)
console.log(anothername);

let userOne=
{
    email: "user.@gmail.com",
    upi:"user@upi"
}

let userTwo= userOne;

userTwo.email="kanika@google.com";
console.log(userOne.email) // dono heap s refrenec l rhe h 
console.log(userTwo.email)
