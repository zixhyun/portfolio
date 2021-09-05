$(function(){

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{
          delay:1000,
        },
      
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

      $('.b_menu').click(function(){
        $('.cover').fadeIn();
        $('.m_gnb').animate({'left':0},500)
        $('body,html').css('overflow','hidden')
        $('.m_gnb').css('overflow','auto');
      });

      $('.m_close').click(function(){
        $('.m_gnb').animate({'left':'-100%'},500)
        $('.cover').fadeOut();
        $('body,html').css('overflow','auto')
      });

      $('.m_gnb_menu>ul>li').click(function(){
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
      });
      $('.m_gnb_menu>ul>li>a').click(function(){
        $(this).next().slideToggle(300).parent().siblings().find('.depth2').slideUp();
      });
      $('.depth2>li').click(function(){
        $('.m_gnb_menu>ul>li').removeClass('on')
      });

});