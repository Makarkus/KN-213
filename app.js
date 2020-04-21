$(function(){
   
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = 0;
    
    
    $(window).on("scroll", function(){
       
        scrollOffset = $(this).scrollTop();
        
        if( scrollOffset >= introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    });
    
  
    /* Menu nav toggle */
    $("#nav__toggle").on("click", function(event){
       event.preventDefault();
        
        $(this).toggleClass("active");
        $("nav").toggleClass("active");   
        
       
    });
      
    
});


var a = document.getElementById("logo");
a.addEventListener("mouseover",()=>{a.style.fontSize = "60px"; a.style.transition="1s";})
a.addEventListener("mouseleave",()=>{a.style.fontSize=null;})


