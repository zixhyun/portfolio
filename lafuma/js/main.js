$(function(){
    $('.box1').slick({
        autoplay:true,
        dots:true
    });
    $('.m_box1').slick({
        autoplay:true,
        dots:true
    });

    $('main .box2 a').mouseenter(function(){
        $(this).find('.cover').fadeIn(100);
    });

    $('main .box2 a').mouseleave(function(){
        $(this).find('.cover').fadeOut(100);
    });

    $('main .box3 a').mouseenter(function(){
        $(this).find('.cover').fadeIn(100);
    });

    $('main .box3 a').mouseleave(function(){
        $(this).find('.cover').fadeOut(100);
    });

    $('footer .lang button').click(function(){
        $('.lang ul').toggle();
    });
    
    $(window).resize(function(){
        var num = $(this).width()
        console.log(num);
        if(num<= 767){
           $('main .box1 .slick-prev, main .box1 .slick-next').hide()
           $('main .box1 .slick-dots').show()
        }else{

              $('main .box1 .slick-prev,main .box1 .slick-next').show()
              $('main .box1 .slick-dots').show()
        }

        if(num <= 767){
            $('main .box1 .visual1 img').attr('src','images/m_visual_a.jpg');
            $('main .box1 .visual2 img').attr('src','images/m_visual_b.jpg');
            $('main .box2 .visual1 img').attr('src','images/m_catalogue.jpg');
            $('main .box2 .visual2 img').attr('src','images/m_video.jpg');
            $('main .box2 .visual3 img').attr('src','images/m_product.jpg');
            $('main .box2 .visual4 img').attr('src','images/m_athletic.jpg');
            $('main .box2 .visual5 img').attr('src','images/m_camping.jpg');

        }else{
            $('main .box1 .visual1 img').attr('src','images/visual_a.jpg');
            $('main .box1 .visual2 img').attr('src','images/visual_b.jpg');
            $('main .box2 .visual1 img').attr('src','images/cata_ot.jpg');
            $('main .box2 .visual2 img').attr('src','images/video_ot.jpg');
            $('main .box2 .visual3 img').attr('src','images/product_ot.jpg');
            $('main .box2 .visual4 img').attr('src','images/athletic_ot.jpg');
            $('main .box2 .visual5 img').attr('src','images/camping_ot.jpg');

        }
    });

    $('.m_btn').click(function(){
        $('.cover').fadeIn();
        $('.m_wrap').animate({'left':'0'},500)
        $('body,html').css('overflow','hidden')
    });

    $('.cover').click(function(){
        $('.cover').fadeOut();
        $('.m_wrap').animate({'left':'-100%'},500)
        $('body,html').css('overflow','auto')
    });

    $('.m_gnb a').click(function(){
        $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp();
    });

});