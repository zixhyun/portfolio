$(function(){

    $('.quick li').click(function(){
        var num = $(this).index();
        $('.quick li').removeClass('on');
        $(this).addClass('on');
        
        if(num==0){
            $('body,html').animate({'scrollTop':0},1000);
        }else if(num==1){
            $('body,html').animate({'scrollTop':1000},1000);
        }else if(num==2){
            $('body,html').animate({'scrollTop':2000},1000);
        }
    });

     $('.down-scroll').click(function(){
      var num = $('#about').offset().top;
      $('body,html').animate({'scrollTop':num},500);
    });

    $(window).scroll(function(){
        var num = $(document).scrollTop()
        if(num > 140){
            $('#header').addClass('on');
        }else{
            $('#header').removeClass('on');
        }

        if(num>=0 && num<=998){
            $('.quick li').removeClass('on');
            $('.quick li').eq(0).addClass('on');
        }else if(num >999 && num <=1998){
            $('.quick li').removeClass('on');
            $('.quick li').eq(1).addClass('on');
        }else if(num >1999 && num <=2998){
            $('.quick li').removeClass('on');
            $('.quick li').eq(2).addClass('on');
        }

        if (num >0 && num <= 998) {
            $('.tit-box').addClass('on');
            $('.tit-box').fadeIn();
        } else if (num > 999) {
            $('.tit-box').removeClass('on');
            $('.tit-box').fadeOut();
        }

        if (num >999 && num <= 1999) {
            $('.skills').addClass('on');
        } else if (num > 0 && num < 998){
            $('.skills').removeClass('on');
        }
    });

    $(function(){
        $('.btn_home').click(function(){
                $('body,html').animate({'scrollTop':0},1000);
        });
        $('.btn_about').click(function(){
                $('body,html').animate({'scrollTop':1000},1000);
        });
        $('.btn_port').click(function(){
                $('body,html').animate({'scrollTop':2000},1000);
        });
    });
    

    $('.btn_box').isotope({
        itemSelector:'.btn_box-item',
        masonry: {
            columnWidth: 5
        }
    })
    $('#all').click(function(){
        $('.btn_box').isotope({filter :'.btn_box-item'});
    });
    $('#res').click(function(){
        $('.btn_box').isotope({filter :'.res'});
    });
    $('#web').click(function(){
        $('.btn_box').isotope({filter :'.web'});
    });
    $('#mob').click(function(){
        $('.btn_box').isotope({filter :'.mob'});
    });
    
    
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