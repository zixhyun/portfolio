$(document).ready(function(){
    $('.img_list').slick({
        arrows:true,
        dots:false,
        infinite: true,
        speed: 500,
        fade: true,
    });
  });

$(function () {
    $('.btn_1').click(function () {
        $('body,html').animate({
            'scrollTop': 1277
        }, 1000);
    });
    $('.btn_2').click(function () {
        $('body,html').animate({
            'scrollTop': 2302
        }, 1000);
    });
    $('.btn_3').click(function () {
        $('body,html').animate({
            'scrollTop': 3302
        }, 1000);
    });
    $('.btn_4').click(function () {
        $('body,html').animate({
            'scrollTop': 4442
        }, 1000);
    });
    $('.btn_5').click(function () {
        $('body,html').animate({
            'scrollTop': 5482
        }, 1000);
    });
    $('.btn_6').click(function () {
        $('body,html').animate({
            'scrollTop': 6482
        }, 1000);
    });
    $('.btn_7').click(function () {
        $('body,html').animate({
            'scrollTop': 7482
        }, 1000);
    });
    $('.btn_8').click(function () {
        $('body,html').animate({
            'scrollTop': 8482
        }, 1000);
    });
    $('.btn_9').click(function () {
        $('body,html').animate({
            'scrollTop': 9632
        }, 1000);
    });
    $('.btn_10').click(function () {
        $('body,html').animate({
            'scrollTop': 10709
        }, 1000);
    });
    $('.btn_11').click(function () {
        $('body,html').animate({
            'scrollTop': 11849
        }, 1000);
    });
    $('.btn_12').click(function () {
        $('body,html').animate({
            'scrollTop': 0
        }, 1000);
    });

    $('.quick li').click(function () {
        var num = $(this).index();
        console.log(num);

        $('.quick li').removeClass('on');
        $(this).addClass('on');

        if (num == 0) {
            $('body,html').animate({
                'scrollTop': 0
            }, 1000);
        } else if (num == 1) {
            $('body,html').animate({
                'scrollTop': 1277
            }, 1000);
        } else if (num == 2) {
            $('body,html').animate({
                'scrollTop': 2302
            }, 1000);
        } else if (num == 3) {
            $('body,html').animate({
                'scrollTop': 3302
            }, 1000);
        } else if (num == 4) {
            $('body,html').animate({
                'scrollTop': 4442
            }, 1000);
        } else if (num == 5) {
            $('body,html').animate({
                'scrollTop': 5482
            }, 1000);
        } else if (num == 6) {
            $('body,html').animate({
                'scrollTop': 6482
            }, 1000);
        } else if (num == 7) {
            $('body,html').animate({
                'scrollTop': 7482
            }, 1000);
        } else if (num == 8) {
            $('body,html').animate({
                'scrollTop': 8482
            }, 1000);
        } else if (num == 9) {
            $('body,html').animate({
                'scrollTop': 9632
            }, 1000);
        } else if (num == 10) {
            $('body,html').animate({
                'scrollTop': 10709
            }, 1000);
        } else if (num == 11) {
            $('body,html').animate({
                'scrollTop': 11849
            }, 1000);
        }
    });


    //사용자가 스크롤바를 움직였을때 이벤트
    $(window).scroll(function () {

        // 스크롤바의 위치를 찾아주는 함수
        var num = $(document).scrollTop()
        if (num > 1277) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }

        // 각 섹션마다 스크롤바가 해당 위치에 있으면 QUICK 버튼에 불들어오기
        if(num>=0 && num<=1276){
            $('.quick li').removeClass('on')
            $('.quick li').eq(0).addClass('on')
        }else if(num >= 1277 && num <= 2301){
            $('.quick li').removeClass('on')
            $('.quick li').eq(1).addClass('on')
        }else if(num >= 2302 && num <= 3301){
            $('.quick li').removeClass('on')
            $('.quick li').eq(2).addClass('on')
        }else if(num >= 3302 && num <= 4441){
            $('.quick li').removeClass('on')
            $('.quick li').eq(3).addClass('on')
        }else if(num >= 4442 && num <= 5481){
            $('.quick li').removeClass('on')
            $('.quick li').eq(4).addClass('on')
        }else if(num >= 5482 && num <= 6481){
            $('.quick li').removeClass('on')
            $('.quick li').eq(5).addClass('on')
        }else if(num >= 6482 && num <= 7481){
            $('.quick li').removeClass('on')
            $('.quick li').eq(6).addClass('on')
        }else if(num >= 7482 && num <= 8481){
            $('.quick li').removeClass('on')
            $('.quick li').eq(7).addClass('on')
        }else if(num >= 8482 && num <= 9631){
            $('.quick li').removeClass('on')
            $('.quick li').eq(8).addClass('on')
        }else if(num >= 9632 && num <= 10708){
            $('.quick li').removeClass('on')
            $('.quick li').eq(9).addClass('on')
        }else if(num >= 10709 && num <= 11858){
            $('.quick li').removeClass('on')
            $('.quick li').eq(10).addClass('on')
        }else if(num >= 11859){
            $('.quick li').removeClass('on')
            $('.quick li').eq(11).addClass('on')
        }
        // ==== 스크롤바의 위치에 따라서 애니메이션 실행====
        if (num > 715 && num <= 2301) {
            $('.mobile_case').addClass('on');
        } else if (num > 0 && num < 714) {
            $('.mobile_case').removeClass('on');
        }

        if (num > 1843 && num <= 3301) {
            $('.cat').addClass('on');
            $('.phone').addClass('on');
        } else if (num > 0 && num < 1842) {
            $('.cat').removeClass('on');
            $('.phone').removeClass('on');
        }

        if (num > 3042 && num <= 4441) {
            $('.section4 .img_wrap').addClass('on');
            $('.section4 .img_wrap .img2').addClass('on');
        } else if (num > 0 && num < 3041) {
            $('.section4 .img_wrap').removeClass('on');
            $('.section4 .img_wrap .img2').removeClass('on');
        }

        if (num > 4150 && num <= 5481) {
            $('.s5_img_wrap .img1').addClass('on');
            $('.s5_img_wrap .img2').addClass('on');
        } else if (num > 0 && num < 3912) {
            $('.s5_img_wrap .img1').removeClass('on');
            $('.s5_img_wrap .img2').removeClass('on');
        }

        if (num > 5064 && num <= 6481) {
            $('.s6_img_wrap .img1').addClass('on');
            $('.s6_img_wrap .img2').addClass('on');
            $('.effect span').addClass('on');
            $('.effect2 span').addClass('on');
            $('.line1').addClass('on');
            $('.line span').addClass('on');
        } else if (num > 0 && num < 4713) {
            $('.s6_img_wrap .img1').removeClass('on');
            $('.s6_img_wrap .img2').removeClass('on');
            $('.effect span').removeClass('on');
            $('.effect2 span').removeClass('on');
            $('.line1').removeClass('on');
            $('.line span').removeClass('on');
        }

        if (num > 6104 && num <= 7481) {
            $('.s7_img').addClass('on');
        } else if (num > 0 && num < 5673) {
            $('.s7_img').removeClass('on');
        }

        if (num > 8092 && num <= 9631) {
            $('.img_box .img1').addClass('on');
            $('.img_box .img2').addClass('on');
            $('.section9_inner .tit').addClass('on');
        } else if (num > 0 && num < 7592) {
            $('.img_box .img1').removeClass('on');
            $('.img_box .img2').removeClass('on');
            $('.section9_inner .tit').removeClass('on');
        }
        
        if(num>9232 && num<=10708){
            $('.section10  .mobile .case_d').addClass('on');
            $('.section10  .mobile .case').addClass('on');
        }else if(num>0 && num<=9231){
            $('.section10  .mobile .case_d').removeClass('on');
            $('.section10  .mobile .case').removeClass('on');
        }

        if (num > 9832 && num <= 11858) {
            $('.front').addClass('on');
            $('.back').addClass('on');
        } else if (num > 0 && num < 8959) {
            $('.front').removeClass('on');
            $('.back').removeClass('on');
        }

        if (num > 10594 && num <= 12590) {
            $('.section12_inner .visual').addClass('on');
        } else if (num > 0 && num < 10932) {
            $('.section12_inner .visual').removeClass('on');
        }
        
        

        // 컬러를 선택했을때 글자색을 변경하는 함수
        // $('.color ul li').click(function(e){
        //     //하이퍼링크 임시링크 맨위로 올라가는걸 방지
        //     $('.color ul li').removeClass('on');
        //     $(this).addClass('on');
        // });
        $('.color_left li').click(function(e){
            e.preventDefault();
            var num = $(this).index();
            console.log(num);
            $('.color_left li').removeClass('on');
            $('.case_left li').removeClass('on');
            $('.case_left li').eq(num).addClass('on');
            $('.color_right li').removeClass('on');
            $('.case_right li').removeClass('on');
            $(this).addClass('on');
        });

        $('.color_right li').click(function(e){
            e.preventDefault();
            var num = $(this).index();
            console.log(num);
            $('.color_right li').removeClass('on');
            $('.case_right li').removeClass('on');
            $('.case_right li').eq(num).addClass('on');
            $('.color_left li').removeClass('on');
            $('.case_left li').removeClass('on');
            $(this).addClass('on');
        });



    });


});