const  account_id =144553
let account_email="anshit985sharma@gmail.com"
var account_pass="12345"
account_city="ludhiana"
let account_state; 
//  undefined

// account_id=3 not allowed as it is constant
account_email="ansh@gmail.com"
account_pass="69"
account_city="majha"

console.log(account_id);
console.table([
    account_email,account_pass,account_id,account_state
])

/*
prefer not to use var due to issue in blockscope and functional scope
*/


