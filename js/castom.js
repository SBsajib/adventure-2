

$(function(){

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop(); 
        if(scroll >= 100){
            $("header") .addClass("stiky")  
        }else{
            $("header") .removeClass("stiky")  
        }
             });
             
});




    
         var swiper = new Swiper(".mySwiper", {
           slidesPerView: 3,
           spaceBetween: 30,
           slidesPerGroup: 1,
           loop: true,
           loopFillGroupWithBlank: true,
           speed:2000,
           autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
           pagination: {
             el: ".swiper-pagination",
             clickable: true,
           },
           navigation: {
             nextEl: ".swiper-button-next",
             prevEl: ".swiper-button-prev",
           },
         });
     


   

