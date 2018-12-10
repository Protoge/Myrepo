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
                  
                  if (n > x.length) {slideIndex = 1;
                      
                  }    
                  if (n < 1) {slideIndex = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";
                     
                  }
                  x[slideIndex-1].style.display = "block";  
                  
                    

                }