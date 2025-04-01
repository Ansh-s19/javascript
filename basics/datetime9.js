let myDate=new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //object

// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3,34)
// let myCreatedDate=new Date("2023-01-14") //yy mm dd
let myCreatedDate=new
Date("01-14-2023") //mm dd yy

console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now() //milisecond
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
 //milisecond

 let newDate= new Date()
 console.log(newDate);
 console.log(newDate.getMonth()+ 1); //+1 as it will show exact month as it start month from 0 to 11 so oct is 9 so 9+1=10 which is right
 console.log(newDate.getDate());
 console.log(newDate.getDay());
 console.log(newDate.getMonth()+1);
 
 console.log(`date is ${newDate.getDate()} and the time is ${newDate.toTimeString()}`);
console.log(newDate.toLocaleString('default',{weekday:"long",
    

}));

 
 
 
 







