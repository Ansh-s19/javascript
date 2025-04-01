var b=200
{} //=> scope , with function or if else than called as scope
let a=300
 if (true){
    let a=10
    var b=19
    const c=20
    console.log("inner",a);
    
 }
//a b and c should not be printed outside as they are declare in side if condition but var is printed as it have scope problem //// inside if  it is local scope outside if it is global scope //value declared inside scope can not not go out

// console.log(a);
// console.log(b);
// console.log(c);


//nested scope

function one(){
  const  username="ansh"
    function two(){
      const  age=20
        console.log(username);
        
    }
// console.log(age); //error
two()

}
one() 
//function two can acess one but one can't acess two

if(true){
    const age=30

if(age===30){
   const name="ravi"
   console.log(age+name);
   
}
// console.log(name); //error

}
// console.log(username); //error as cant acces outside scope

//  ++++++++++++++interting++++++++++++++
console.log(addOne(5)); //it will run

function addOne(num){
return num+1
}

// console.log(addtwo(6)); // it will not run as we have declared funcion in variable

const addtwo =function(num){
    return num+2
}

console.log(addtwo(6));
