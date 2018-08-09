$( document ).ready(function() {
    /*------------------------------------------------------------------------------------------------------*/

    $(window).scroll(function(){
        
     if($(this).scrollTop() > 40){
         $('.icons').hide();
         $(".navbar-default").css({'position':'fixed','top':'-10px','width':'100%'});      /*scroll nav bar*/
     }else{
         $('.icons').show();
         $(".navbar-default").css({'position':'relative','top':'0'});

     };
     });
    /*------------------------------------------------------------------------------------------*/
    
    
        
        $('.tabs-list li').on('click', function(){
  
   $(this).addClass('active').siblings().removeClass('active') ;        /*about*/
    
    $('.content-list > p').hide();
    $($(this).data('content')).fadeIn();
});
    
     
 /*---------------------------------------------------------------------------------------*/

 $(window).scroll(function(){
     
     if($(this).scrollTop() > 100){
         $("#scrolltop").fadeIn()
     }else{
         $("#scrolltop").fadeOut()
     }
                                                            /* click scroll to Top*/
 });
    
   $("#scrolltop").on('click', function(){
       $('html , body').animate({
           scrollTop:0
       },500);
   });    

    /*----------------------------------------------------------------------------*/
    
    $(window).scroll(function(){
        if($(this).scrollTop()>2890){
            $('.media').addClass('anim-media');
            $('.contant-a').addClass('animat-contanta');        /*contact*/
            $('.content-c').addClass('anim-contentc');
        }
    });
    /*--------------------------------------------------------------------------*/
    
    $(window).scroll(function(){
        if($(this).scrollTop()>1875){
            $('.our-work p').addClass('anim-ourworkp');
            $('.our-work h2').addClass('anim-ourworkh2');
        }
    });
    
   $(window).scroll(function(){
        if($(this).scrollTop()>2090){
            $('.our-work button:first-of-type').delay(3500).animate({'opacity':'1'});
            $('.our-work button:nth-of-type(2)').delay(3000).animate({'opacity':'1'});
            $('.our-work button:nth-of-type(3)').delay(2500).animate({'opacity':'1'});
            $('.our-work button:nth-of-type(4)').delay(2000).animate({'opacity':'1'});
            $('.our-work button:nth-of-type(5)').delay(1500).animate({'opacity':'1'});
            $('.our-work button:nth-of-type(6)').delay(1000).animate({'opacity':'1'});
            $('.our-work button:nth-of-type(7)').delay(500).animate({'opacity':'1'});
        }
    });
    
    $('.all').click(function(){
        $('.our-work img').fadeIn(1000);
    });
                                                                                            /*-----our-work---*/
    
     $('.sell').click(function(){
        $('#a, #d, #e').fadeIn(1000);
            $('#b, #c, #f, #g, #h, #i, #j').fadeOut(10);
        });
  
    
    
    
     $('.print').click(function(){
        $('#b, #c, #f').fadeIn(1000);
            $('#a, #d, #e, #g, #h, #i, #j').fadeOut(2);
        });
        
    
    $('.company-a').click(function(){
        $('#g').fadeIn(1000);
            $('#a, #d, #e, #b, #c, #f, #h, #i, #j').fadeOut(2);
        });
     
        
   
    $('.company-b').click(function(){
        $('#f').fadeIn(1000);
            $('#a, #d, #e, #b, #c, #g, #h, #i, #j').fadeOut(2);
        });
    
      $('.prog').click(function(){
        $('#g, #h').fadeIn(1000);
            $('#a, #d, #e, #b, #c, #f, #i, #j').fadeOut(2);
        });
    
     $('.desine').click(function(){
        $('#i, #j').fadeIn(1000);
            $('#a, #d, #e, #b, #c, #f, #g, #h').fadeOut(2);
        });
    
    
    
        $(window).scroll(function(){
        if($(this).scrollTop()>2100){
            $('#a, #b, #f, #g').addClass('anim-ourworkh2');
            $('#c, #h').addClass('anim-ourworkp');
            $('#d, #e, #j, #i').addClass(' anim-media');
        }
    });
    
   /*-------------------------------------------------------------------------------------*/
    
    
    $(window).scroll(function(){
        if($(this).scrollTop()>1510){
            $('.want .want-a p').addClass('anim-ourworkp');         /*------want----*/
            $('.want .want-a button').addClass('swing');
            $('.want .want-b').addClass('anim-ourworkh2');
        }
    })
    
    /*-------------------------------------------------------------------------------------*/
   
    $(window).scroll(function(){
        if($(this).scrollTop()>1085){
            $('.part-b .anchor').addClass('zoomInLeft');
            $('.part-b .angellist').addClass('zoomInDown');
            $('.part-b .hand').addClass('zoomInRight');
        }                                                                           /*--service--*/
    });
    
      $(window).scroll(function(){
        if($(this).scrollTop()>650){
            $('.part-a h2').addClass('xx');
            $('.part-a p').addClass('swing');
        }
    });
    /*--------------------------------------------------------------------------------------------------*/
    
        $(window).scroll(function(){
        if($(this).scrollTop()>330){                            /*our*/
            $('.our p').addClass('wobble');
            $('.our li:nth-of-type(1)').addClass('zoomInRight');
            $('.our li:nth-of-type(2)').addClass('bounce');
            $('.our li:nth-of-type(3)').addClass('wobble');

        }                                                                           
    });
    /*-----------------------------------------------------------------------------------------------*/
    
     $('.navbar-nav li a').click(function(){
        $('html , body').animate({
            scrollTop : $('#' + $(this).data('value')).offset().top
        },1500)
    });
    
      /*-------------------------------------------------------------------------------------*/
      $('.contact .img-a').click(function(){
          $('.tel-a').css('display','inline-block');
          $('.tel-b, .tel-c').hide();
      });
      
      $('.contact .img-b').click(function(){
          $('.tel-b').css('display','inline-block');
          $('.tel-c, .tel-a').hide();                               /*frist navbar*/
      });
      
      
      $('.contact .img-c').click(function(){
          $('.tel-c').css('display','inline-block');
           $('.tel-a, .tel-b').hide();

      });
      
      /*----------------------------------------------------------------------------*/
      
      
    
    
    
    
    
    
    
    /*----------------------------------------------------------------------------*/
    /*----print scrollTop in consol */
$(window).on("scroll", function(){
    var sc = $(window).scrollTop();
    console.log(sc);
});
    /*----print scrollTop in consol */
       

  
});




