
let moon =document.querySelector('.moon');
let sun =document.querySelector('.sun');
let body= document.body;




moon.addEventListener("click",function(){

   
    sun.classList.remove('vss') ;
    moon.classList.add('vss') ;

       body.classList.remove('theme') ;
       body.classList.add('theme-1') ;



 });
 


  
   



sun.addEventListener("click",function(){

   
    sun.classList.add('vss') ;
    moon.classList.remove('vss') ;
    
    body.classList.add('theme') ;
    body.classList.remove('theme-1') ;

});






let mon =document.querySelectorAll('.moon')[1];
let sn =document.querySelectorAll('.sun')[1];
let bod= document.body;




mon.addEventListener("click",function(){

   
    sn.classList.remove('vss') ;
    mon.classList.add('vss') ;

       bod.classList.remove('theme') ;
       bod.classList.add('theme-1') ;



 });
 sn.addEventListener("click",function(){

   
  sn.classList.add('vss') ;
  mon.classList.remove('vss') ;
  
  bod.classList.add('theme') ;
  bod.classList.remove('theme-1') ;

});


let main = document.querySelector('.main')
let ph = document.querySelector('.photo')
let read = document.querySelector('.read')
let div=document.querySelectorAll('div')



window.onload= function()  {
    ph.classList.add('visibal');
    read.classList.add('visiba');
    main.classList.remove('hide');


    
};
const divs = document.querySelectorAll('.hide'); 

window.onscroll = function () {
  divs.forEach((div) => {
    const rect = div.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // إذا كان العنصر في مجال العرض
      div.classList.remove('hide');
      div.classList.add('visibal');
    }
    else {
      div.classList.remove('visibal');
      div.classList.add('hide');
    }
  });
};

let z =document.querySelector('.droplist');
let x =document.querySelector('.icon');
let s= document.body;

x.addEventListener("click",function(){


  z.classList.toggle("vss");
})











// ()