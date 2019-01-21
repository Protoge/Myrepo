// /* If you're feeling fancy you can add interactivity 
//     to your site with Javascript */

// // prints "hi" in the browser's dev tools console
// // console.log('hi');

$(document).ready(function(){
  $(".bars").click(function(){
    $(".nav-div").css({"width":"300px"})
    $(".wrapper").css({"margin-right":"150px"})
  })
  
 
  
  $(".close").click(function(){
    $(".nav-div").css({"width":"0"})
    $(".wrapper").css({"margin-right":"auto"})
  })
})


// same function as the top one

// const bars = document.querySelector(".bars");
// const menu = document.querySelector(".nav-div");
// const close = document.querySelector(".close");
// const wrap = document.querySelector(".wrapper")

// bars.addEventListener("click",()=>{
//   if(menu.style.width === "300px"){
//     menu.style.width = "0"
//   }
  
//   else{
//     menu.style.width = "300px"
    
//   }
// })

// close.addEventListener("click",()=>{
//   menu.style.width = "0"
// })

var slideIndex = 1;
                showDiv(slideIndex);
                
                function plusDivs(n) {
                  showDiv(slideIndex += n);
                }
                
                function showDiv(n) {
                  var i;
                  var x = document.getElementsByClassName("logopix");
                  
                  if (n > x.length) {slideIndex = 1;}    
                  if (n < 1) {slideIndex = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";
                     
                  }
                  x[slideIndex-1].style.display = "block";  
                  
                    

                }





const close = document.querySelector(".close-slide-content");
const inter = document.querySelector(".interface")
close.addEventListener("click",()=>{
  if(inter.style.height === "0"){
    inter.style.height = "100%"
  }else {
    inter.style.height = "0";
    inter.style.transition = "height .25s"
  }
})



const open = document.querySelector(".arrow-slide-content");

open.addEventListener("click",()=>{
  if(inter.style.height === "100%"){
    inter.style.height = "0"
  }else {
    inter.style.height = "100%";
    inter.style.transition = "height .25s"
  }
})

// later addition
// $("className").on("addEventHandler",function(event){$(event.target).hide()})
