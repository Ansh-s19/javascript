const descripter =Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descripter);


const obj={
    name:"ansh",
    age:20,
    isAvailable:true,
    greet:function(){
        console.log("hello world")
    }
}
console.log(obj);
obj.greet()
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

const a=Object.defineProperty(obj, 'name',{writable:false,enumerable:true})
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log(obj.name); // ansh
obj.name="sachin"   // it will not change the value of name because we have set writable to false
console.log(obj.name); // ansh      
console.log(obj); // { age: 20, isAvailable: true, greet: [Function: greet] }




