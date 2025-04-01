function SetUsername(username){
    //compex db calls
    this.username=username
}
function createuser(username,email,password){
    SetUsername.call(this,username)//to call other function use call and use this 
    this.email=email
    this.password=password
}
const a=new createuser("ansh","ansh985sharma@gmail.com",123)
console.log(a);
