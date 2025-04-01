const a=document.getElementById('clock')
setInterval(function() {
   let  date=new Date()
    a.innerHTML= date.toLocaleTimeString();
},2000);