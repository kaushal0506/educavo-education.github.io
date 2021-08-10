// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop() > 20) {
        $('nav').addClass('nav-stick');
        $('nav').addClass('shadow');
        $('.logo-lite').css("display","none");
        $('.logo-dark').css("display","block");
        $('.fa-bars').css("color","black");
  }

  else {
        $('nav').removeClass('nav-stick');
        $('nav').removeClass('shadow');
        $('.logo-lite').css("display","block");
        $('.logo-dark').css("display","none");
        $('.fa-bars').css("color","white");
  }
})