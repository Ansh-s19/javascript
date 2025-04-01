const score=300
const stringnumber= String(score) //to convert one datatype to other
console.log(typeof stringnumber);

const balance=new Number(200) //to show which datatype it is
console.log(typeof balance);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //precision value used in e commerce
const otherno=23.776
console.log(otherno.toPrecision(3));

const num=200000

console.log(num.toLocaleString('en-IN')); //comma in india style

//++++++++++++ MATH +++++++++++++++
const ab=53.8
console.log(Math); //object
console.log(Math.abs(-4));
console.log(Math.round(4.7));
console.log(Math.round(ab));
console.log(Math.ceil(4.2)); //any number above even .1 will be next no
console.log(Math.floor(4.9)); //4.1=4,4.7 is also 4
console.log(Math.sqrt(25));
console.log(Math.max(10,23,4,67));
console.log(Math.min(2,45,6,78,18));

console.log( Math.random()); //widely used 0,1
console.log((Math.random()*10)+1); //by plus 1 min value will be above 1 only
console.log(Math.floor(Math.random()*10)+1); //+1 to avoid 0 case

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min));
















