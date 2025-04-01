function name(){
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("t");
}

name()

function add2no(num1,num2){
console.log(num1+num2);

}
add2no(45,56)
 const result=add2no(45,"6")
 console.log(result);
 
add2no("45",56)

function addno(num1,num2){
// const result1=num1+num2;
// return result1
return num1+num2
}
console.log(addno(10,23));

 const result1=addno(5,6)
 console.log( "result1 =",result1);
 
function loginUser(username /*="kala"*/ ){  //min default value will be kala even if string is empty

    if(username===undefined){
        console.log("plz enter a username");
        return

    }
    return `${username} "justloggedin"`
}

console.log(loginUser("ansh"));
console.log(loginUser()); //undefined
