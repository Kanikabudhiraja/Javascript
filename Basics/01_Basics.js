const accountId = 1445678
let accountEmail= "kanikabudhiraja.xb@gmail.com"
var accountPassword="12345"
accountCity ="Jaipur"
let accountState;

// accountId=2 // not allowed const make the permanent changes
accountEmail = "hc@hc.com"
accountPassword ="23134"
accountCity ="Pune"

// the items which the stored using the let and var keywords may get changes
// the the items which are wriiten using the const never got changed

console.log(accountId);

/*
Perfer not to use VAR keyword because of issue of Block scope and functional scope
 */
console.table([accountEmail,accountId, accountPassword,accountCity]);
console.table([accountEmail,accountId, accountPassword,accountCity ,accountState])

// when we don't assigned any value the it will give us UNDEFINED value as the name,