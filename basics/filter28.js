const arr=["ansh","kala","ravi","ashok" ]
const values=arr.forEach((item)=>{
console.log(item);
// return item // foreach loop does not return 
})//in foreach loop we cant store in variable so we use filter loop
console.log(values);

const number=[1,2,3,3,5,6,7,90,9,10]
const mynum=number.filter(function (num)
    {return  num>4})
console.log(mynum);//in filter we need to give a condition
//if we open scope than we need to use return,  else dont use scope and  no need to write return

const arr1=[1,2,3,4,5,6,7]
const a=[]
const b=[]
arr1.forEach((num)=>{
    console.log(num);

    if (num>4) {
        a.push(num)
    }
    else{
        b.push(num)
    }
})
console.log(a);
console.log(b);
const books=[{
    title:"one",genre:"ficition",publish:1991
},
{title:"two",genre:"scifi",publish:2001},
{title:"three",genre:"horror",publish:2019},
{title:"four",genre:"comedy",publish:1999}]



const userbooks=books.filter((bk)=>{
  return bk.publish>1990 && bk.title=="four"
})
const userbook=books.filter((bk)=>
     bk.genre =="scifi" ||bk.genre=="horror"
)
console.log(userbooks);
console.log(userbook);

