
$(window).scroll(function (){
  $('.el_fadeBottom').each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
          console.log(scroll);
        if (scroll > elemPos - windowHeight + 50){
            $(this).addClass('el_scrollIn');
          }
      });
  });