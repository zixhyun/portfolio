$(function(){
   
   

    $(window).scroll(function(){
        var num = $(document).scrollTop()
        if(num > 140){
            $('.header').addClass('on')
        }else{
            $('.header').removeClass('on')
    
        }
      });

        
    $(function(){
        $('.btn_home').click(function(){
                $('body,html').animate({'scrollTop':0},1000)
            
        });
        
    });

    $('.button div a').click(function(){
        $('.button div a').removeClass('on')
        $(this).addClass('on')
    });

    $('.btn_box').isotope({
        itemSelector:'.btn_box-item',
        masonry: {
            columnWidth: 5
        }
    })
    $('#all').click(function(){
        $('.btn_box').isotope({filter :'.btn_box-item'});
    })
    $('#res').click(function(){
        $('.btn_box').isotope({filter :'.res'});
    })
    $('#web').click(function(){
        $('.btn_box').isotope({filter :'.web'});
    })
    $('#mob').click(function(){
        $('.btn_box').isotope({filter :'.mob'});
    })
    
    
    $('.logo-box, .hover-mask').click(function(){
        const IndexNum = $(this).index();
        $('.detail_box').fadeIn().addClass('on');
        $('.cover').fadeIn();
        $('.detail_box_responsive .detail').eq(IndexNum).fadeIn();
        $('body, html').css({'overflow':'hidden'});
    });

    $('.detail-close_btn, .cover').click(function(){
        $('.cover').fadeOut();
        $('.detail_box').fadeOut().removeClass('on');
        $('.detail').hide();
        $('body, html').css({'overflow':'auto'});
    });

    $('.btn_box > .btn_box-item').click(function(){
        const IndexNum = $(this).index();
        $('.detail_box').fadeIn().addClass('on');
        $('.cover').fadeIn();
        $('.detail').eq(IndexNum).fadeIn().siblings().hide();
        $('body, html').css({'overflow':'hidden'});
    });
   
    
});