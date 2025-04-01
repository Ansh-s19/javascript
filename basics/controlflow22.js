const userEmail="ansh985sharma@gmail.com"
// const userEmail=[]
if (userEmail) {
    console.log("got email");
}
else{
    console.log("dont got email");
    
}

//falsy values

// false,"",0,-0,bigInt 0n,null,NaN,undefined

//truthy values

// true,1,"anything in string" "0",'false' ," ",[],{},function(){}

if (userEmail.length===0) {
    console.log("array is empty");
    
}

const emptyObject={}
if (Object.keys(emptyObject.length===0)) {
    console.log("object is empty");
    
}

const arr=[1,2,3,4,5]
console.log(arr.length);
console.log(arr[2]);

