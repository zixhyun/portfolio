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

      //재생,정지버튼 토글
      var sw = 0;
      $('.btn_pause').click(function(){
        if(sw==0){
            $(this).addClass('on');
            //swiper슬라이드에서 일시정지
            swiper.autoplay.stop();
            sw =1;
        }else{
            $(this).removeClass('on');
            //swiper슬라이드에서 플레이
            swiper.autoplay.start();
            sw =0;
        }

      });

      $('.best_slider').slick({
        autoplay:true,
        dots:true,
        arrows:false,
      });


      $('#header .m_btn').click(function(){
        $('.m_wrap').addClass('on');
        $('.cover').fadeIn();
        $('body, html').css({'overflow':'hidden'});
      });
      $('.m_btn_close').click(function(){
        $('.m_wrap').removeClass('on');
        $('.cover').fadeOut();
        $('body, html').css({'overflow':'auto'});
      });

      $('.m_tab_list>ul>li').click(function(){
        $('.m_tab_list>ul>li').find('.m_depth2_wrap').hide();
        $(this).find('.m_depth2_wrap').show();
        $('.m_tab_list>ul>li').removeClass('on');
        $(this).addClass('on');
      });

      $('.m_tab ul li').click(function(){
        var index_num = $(this).index();
        $('.m_tab ul li').removeClass('on');
        $(this).addClass('on');
        $('.m_tab_list > ul').hide();
        $('.m_tab_list > ul').eq(index_num).show();
      });

      var sw_search = true;
      $('#header .m_search').click(function(){
        if(sw_search){
         $(this).addClass('on');
         $('.search_wrap').slideDown(300, 'swing');
         $('body, html').css({"overflow":"hidden"});
         sw_search = false; 
        } else {
          $(this).removeClass('on');
         $('.search_wrap').slideUp(300, 'swing');
         $('body, html').css({"overflow":"auto"});
         sw_search = true; 
        }
      });


      $('.floating-menu_wrap .btn_up').click(function(){
        $('html, body').animate({'scrollTop':0}, 500);
      });

      $(window).scroll(function(){
        var scroll_num = $(document).scrollTop();
        console.log(scroll_num);
        if(scroll_num > 100) {
          $('.floating-menu_wrap ul .btn_up-list').fadeIn();
        } else {
          $('.floating-menu_wrap ul .btn_up-list').fadeOut();
        }
      });
});