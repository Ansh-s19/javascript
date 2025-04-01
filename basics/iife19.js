//immediately invoked function expressions(iife)

//to not get pollution from global scope in function, and function gets imediately executed we use iife

(function a(){
    console.log(`db connected`);
    
}) ();//named iife

// ()() function defination , execution

((name)=> {
 console.log(`db 2connected ${name}`);
 
})('anshh');//unnamed iife

//use semicolon after iffe  is ended