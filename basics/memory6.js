/* 
memory two types stack and heap
stack(primitive),heap(non primitive)
stack=> copy of variable heap=>reference of original value in memory

*/

let myinsta="ansh_s19"
let anotherid=myinsta
anotherid="ansh_s69"
console.log(myinsta);

console.log(anotherid);

let userone={
    email:"ansh99sharma@gmail.com",
    upi:"7973865500@paytm"
}
let usertwo= userone
userone.email="ansh9999@gmail.comm"
console.log(userone.email);
console.log(usertwo.email);



