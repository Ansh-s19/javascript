//random color will be generated with hex value
const random=function(){
    const hex="012345689ABCDEF"
    let color="#"
    for (let i = 0; i < 6; i++) {
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
const start=document.querySelector('#start')
const stop=document.querySelector('#stop')
const a=document.querySelector('body')
let ab;
start.addEventListener('click',function(){
    start.innerHTML="started"
    stop.innerHTML="stop"
    start.style.backgroundColor="green"
    stop.style.backgroundColor="white"
if (!ab) {
    
ab=setInterval(() => {
    a.style.backgroundColor=random()
    console.log(a.style.backgroundColor=random());
      
}, 1000);
}
})

const stopchangingcolor=function(){
    start.innerHTML="start"
    stop.style.backgroundColor="red"
    stop.innerHTML="stopped"
    start.style.backgroundColor="white"
clearInterval(ab)
ab=null;//good practice
}

stop.addEventListener('click',stopchangingcolor)
