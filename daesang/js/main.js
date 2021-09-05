$(function(){
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        //마우스 휠 동작시키는 명령
        mousewheel:true,
        speed:500,
      
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

      $('.btn_next').click(function(){
        swiper.slideNext(1000)


      });


      $('.m_btn').click(function(){
        $('.cover').fadeIn(400);
        $('.gnb_wrap').addClass('on');
        $('body,html').css('overflow','hidden')
    });

    $('.cover,.gnb_close').click(function(){
      $('.cover').fadeOut(400);
      $('.gnb_wrap').removeClass('on');
      $('body,html').css('overflow','auto')

    });


    $('.gnb_list>li>a').click(function(){
      $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp();
      $(this).parent().addClass('on').siblings().removeClass('on');
    })

});