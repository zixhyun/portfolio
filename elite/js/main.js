$(function(){
      $('.visual').slick({
         autoplay:true,
         dots:true
      });

      $('.notice').slick({
         autoplay:true,
         dots:true,
         arrows:false
         
      });

      $('.btn_top').click(function(){
         $('body,html').animate({'scrollTop':0}, 800);
      });

      $(window).resize(function(){
         var num = $(this).width();
         if(num <= 767){
            $('main .visual .slick-prev, main .visual .slick-next').hide()
            $('main .visual .slick-dots').show()
         }else{

               $('main .visual .slick-prev, main .visual .slick-next').show()
               $('main .visual .slick-dots').hide()
         };

         if(num <= 767){
            $('main .visual .visual1 img').attr('src','images/visual01_m.jpg');
            $('main .visual .visual2 img').attr('src','images/visual02_m.jpg');
            $('main .visual .visual3 img').attr('src','images/visual03_m.jpg');
            $('main .visual .visual4 img').attr('src','images/visual04_m.jpg');
            $('main .box1 img').attr('src','images/img_story01_m.jpg');
            $('main .box2 img').attr('src','images/img_story02_m.jpg');
            $('main .box3 img').attr('src','images/img_story03_m.jpg');
            $('main .notice img').attr('src','images/img_facebookevent160816_m.jpg');
            $('main .notice img').attr('src','images/img_blogevent160816_m.jpg');
            $('main .notice img').attr('src','images/img_renewalevent1_m.jpg');
            $('main .notice img').attr('src','images/img_renewalevent2_m.jpg');

         }else{
            $('main .visual .visual1 img').attr('src','images/visual01.jpg');
            $('main .visual .visual2 img').attr('src','images/visual02.jpg');
            $('main .visual .visual3 img').attr('src','images/visual03.jpg');
            $('main .visual .visual4 img').attr('src','images/visual04.jpg');
            $('main .box1 img').attr('src','images/img_story01.jpg');
            $('main .box2 img').attr('src','images/img_story02.jpg');
            $('main .box3 img').attr('src','images/img_story03.jpg');
            $('main .notice img').attr('src','images/img_facebookevent160816.jpg');
            $('main .notice img').attr('src','images/img_blogevent160816.jpg');
            $('main .notice img').attr('src','images/img_renewalevent1.jpg');
            $('main .notice img').attr('src','images/img_renewalevent2.jpg');
         };

      });

      var num = $(window).width();
      if(num <= 767){
          $('main .visual .slick-prev, main .visual .slick-next').hide()
          $('main .visual .slick-dots').show()
      }else{
          $('main .visual .slick-prev, main .visual .slick-next').show()
          $('main .visual .slick-dots').hide()
      };

       if(num <= 767){
         $('main .visual .visual1 img').attr('src','images/visual01_m.jpg');
         $('main .visual .visual2 img').attr('src','images/visual02_m.jpg');
         $('main .visual .visual3 img').attr('src','images/visual03_m.jpg');
         $('main .visual .visual4 img').attr('src','images/visual04_m.jpg');
         $('main .box1 img').attr('src','images/img_story01_m.jpg');
         $('main .box2 img').attr('src','images/img_story02_m.jpg');
         $('main .box3 img').attr('src','images/img_story03_m.jpg');
         $('main .notice .noti1 img').attr('src','images/img_facebookevent160816_m.jpg');
         $('main .notice .noti2 img').attr('src','images/img_blogevent160816_m.jpg');
         $('main .notice .noti3 img').attr('src','images/img_renewalevent1_m.jpg');
         $('main .notice .noti4 img').attr('src','images/img_renewalevent2_m.jpg');

      }else{
         $('main .visual .visual1 img').attr('src','images/visual01.jpg');
         $('main .visual .visual2 img').attr('src','images/visual02.jpg');
         $('main .visual .visual3 img').attr('src','images/visual03.jpg');
         $('main .visual .visual4 img').attr('src','images/visual04.jpg');
         $('main .box1 img').attr('src','images/img_story01.jpg');
         $('main .box2 img').attr('src','images/img_story02.jpg');
         $('main .box3 img').attr('src','images/img_story03.jpg');
         $('main .notice .noti1 img').attr('src','images/img_facebookevent160816.jpg');
         $('main .notice .noti2 img').attr('src','images/img_blogevent160816.jpg');
         $('main .notice .noti3 img').attr('src','images/img_renewalevent1.jpg');
         $('main .notice .noti4 img').attr('src','images/img_renewalevent2.jpg');
      }
      
      $('.model_list li').mouseenter(function(){
         var num = $(this).find('img').attr('src');
         var num2 = num.replace('_off', '_on');
         $(this).find('img').attr('src', num2);
       })
       $('.model_list li').mouseleave(function(){
         var num = $(this).find('img').attr('src');
         var num2 = num.replace('_on', '_off');
         $(this).find('img').attr('src', num2);
       });

       $('.m_btn').click(function(){
         $('.cover').fadeIn(500);
         $('.m_gnb').animate({'left':0},500);
         $('body,html').css('overflow','hidden')
     });
     $('.cover').click(function(){
         $('.m_gnb').animate({'left':'-100%'},500);
         $('.cover').fadeOut(500);
         $('body,html').css('overflow','auto');
     });
     

    });