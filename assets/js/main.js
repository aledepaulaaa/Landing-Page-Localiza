(function(){

    $(document).on("click","a[href^='#']",function(e){
        e.preventDefault();
        var id = $(this).attr("href");

        if(id.length === 1)
            return false;

        var targetoffset = $(id).offset().top + 10,
            menuHeight = $(".header").height(),
            offsetVal = 0; 

        
  
        $('html, body').animate({
            scrollTop: targetoffset - (offsetVal + menuHeight)
        },500);
  
    });
  
    $(document).on("click","a[href='#ver-planos']",function(){
        $('html, body').animate({
            scrollTop: $('#revision2').offset().top
        },500);
    });
    
    $(document).on("click","a[href='#quero-contato']",function(){
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        },500);
    });
    
      $(document).on("click","a[href='#home']",function(){
        $('html, body').animate({
            scrollTop: 0
        },500);
    });
    
    eachSessions();

    
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause:false,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
        
  
    setTimeout(() => {
        $('#modalPromo').modal('show');
    },4000)
    

    //open promo
    $(document).on('click', '[data-open-promo]', function(e){
        e.preventDefault();
        let promo = $(this).attr('data-open-promo');
        let md = $('#modalPromo');

        if(md.hasClass('promo-1'))
            md.removeClass('promo-1')

        if(md.hasClass('promo-2'))
            md.removeClass('promo-2')

        md.addClass(promo);

        md.modal('show');

    });
              
  
  })();

  
  
  function eachSessions(){
    $('section').each(function(){
        var height = $(this).innerHeight(),
            offsetTop = $(this).offset().top,
            menuHeight = $(".header").innerHeight(),
            id = $(this).attr('id'),
            $itemMenu = $("a[href='#" + id + "']");
  
  
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            if( offsetTop -menuHeight < scrollTop  && offsetTop + height - menuHeight >scrollTop ){
                $itemMenu.addClass('active');   
            }else{
                $itemMenu.removeClass('active');   
            }
        })
  
    });
  }


  