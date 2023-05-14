$(document).ready(function(){
  $("a").click(function(e){
    e.preventDefault();  
  }); 
  $('.top').click(function(){
    $('html, body').animate({"scrollTop":0});
  });

  var listArray = ["",""];
  var Swiper01 = new Swiper('.mainSwiper', {
      loop: true,
      autoplayDisableOnInteraction: false,
      slidesPerView: 1,        
      autoHeight: true,
      autoplay: {
          delay: 4000,//animation과 시간 맞춰줘야함
      }, 
      effect: 'fade',
      fadeEffect: {
          crossFade: true
      },
      pagination: {
          el: '.mainSwiper .swiper-pagination',
          clickable: 'true',
          type: 'bullets',
          renderBullet: function (index, className) {
              return '<span class="' + className + '">' +  listArray[index] + '<i></i>' + '<b></b>'  + '</span>';
            },
      } ,
      navigation: {
        nextEl: '.mainSwiper .swiper-button-next',
        prevEl: '.mainSwiper .swiper-button-prev',
    }, 
  });
  $(".start").on("click",function(){
    Swiper01.autoplay.start();
    return false;
  });
  $(".stop").on("click",function(){
    Swiper01.autoplay.stop();
    return false; 
  });
  $(".stop").click(function(){
    $(".start").addClass("active");
    $(".stop").addClass("active");
  });
  $(".start").click(function(){
    $(".start").removeClass("active");
    $(".stop").removeClass("active");
  });
 
  var Swiper02 = new Swiper('.textSwiper', {
    loop: true,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,        
    autoHeight: true,
    autoplay: {
        delay: 5000,//animation과 시간 맞춰줘야함
    },
    navigation: {
      nextEl: '.textSwiper .swiper-button-next',
      prevEl: '.textSwiper .swiper-button-prev',
    },  
  });
  var comm_tab = ['업무용 협업 도구', '쉬운 사용성', '현장과의 소통',"모바일 최적화"]
  var Swiper03 = new Swiper('.commSwiper', {
    loop: true,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    slideActiveClass: "active", 
    observer: true,
		observeParents: true,
    // autoplay: {
    //     delay: 5000,//animation과 시간 맞춰줘야함
    // },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
      nextEl: '.commSwiper .swiper-button-next',
      prevEl: '.commSwiper .swiper-button-prev',
    },pagination: {
      el: '.commSwiper .swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (comm_tab[index]) + '</span>';
        },
      },
  });

  var bu_tab = ["도소매","미용","물류", "운송","건설","교육","IT","의료 간호"]
  var Swiper03 = new Swiper('.buSwiper', {
    loop: true,
    autoplayDisableOnInteraction: false,
    slidesPerView: 1,
    slideActiveClass: "active", 
    observer: true,
		observeParents: true,
    // autoplay: {
    //     delay: 5000,//animation과 시간 맞춰줘야함
    // },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
      nextEl: '.buSwiper .swiper-button-next',
      prevEl: '.buSwiper .swiper-button-prev',
    },pagination: {
      el: '.buSwiper .swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (bu_tab[index]) + '</span>';
        },
      },
  });
  
 

});