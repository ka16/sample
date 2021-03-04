
$(window).scroll(function (){
  $('.el_fadeLeft').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
          console.log(scroll);
        if (scroll > elemPos - windowHeight + 300){
            $(this).addClass('el_scrollIn');
          }
      });
  $('.el_fadeRight').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
          console.log(scroll);
        if (scroll > elemPos - windowHeight + 300){
            $(this).addClass('el_scrollIn');
          }
      });
  });