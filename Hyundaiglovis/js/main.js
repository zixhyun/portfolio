$(function(){
    
  $('#header .gnb').mouseenter(function(){
      $(this).parent().addClass('on');
      $('.depth2').stop().slideDown(300);
      $('.depth2_wrap').stop().slideDown(200);
  });
  $('#header .gnb').mouseleave(function(){
      $(this).parent().removeClass('on');
      $('.depth2').stop().slideUp(300);
      $('.depth2_wrap').stop().slideUp(200);
  });


// ---------------------------- 비디오 슬라이드 객체 ----------------------------
  const swiper = new Swiper('.video_slider', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

// news 슬라이드 객체
    const swiper2 = new Swiper('.news_slider', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay:false,
      slidesPerGroup:3,
      slidesPerView: 3,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
        // when window width is >= 758px
        758: {
          slidesPerView: 'auto',
          slidesPerGroup:1,
          spaceBetween: 50,
        },
     },
    });



    $('.list_service li').mouseenter(function(){
      $(this).addClass('on').siblings().removeClass('on');
    });
    $('.list_service li').mouseleave(function(){
      $(this).removeClass('on');
    });


    $('.btn_scroll').click(function(){
      var scroll = $('#scrollarea').offset().top;
      console.log(scroll);
      $('body,html').animate({scrollTop:scroll},500)
    });


    $(window).scroll(function(){
      var pos = $(window).scrollTop();
      // console.log(pos);

      var sec1 = $('.section1_wrap').offset().top;
      var sec2 = $('.section2').offset().top;
      if(sec2 <= pos+600){
        $('.section2').addClass('on');
      }
      if(sec1 <= pos+600){
        $('.section1_wrap').addClass('on')
      }

    });
    

    var i = 1;
    $('.f_site button').click(function(){
      if(i==1){
        $('.f_site button').addClass('on');
        $('.f_site_list').stop().slideDown(300);
      i = 0;
      }
      else{
        $('.f_site button').removeClass('on');
        $('.f_site_list').stop().slideUp(300);
      i = 1;
      }
    });

    // 모바일메뉴 리스트 클릭시 on class
    $('.m_gnb>li').click(function(){
      $(this).addClass('on').siblings().removeClass('on');
      $(this).find('.depth2').slideToggle(500).parent().siblings().find('.depth2').slideUp(500);
    });

    // 햄버거버튼 클릭시 모바일메뉴 튀어나옴
    $('.m_menu').click(function(){
      $('#m_header .m_gnb_wrap').addClass('on')
    });
    // 닫기버튼 클릭시 모바일메뉴 들어감
    $('.m_close').click(function(){
      $('#m_header .m_gnb_wrap').removeClass('on')
    });

});