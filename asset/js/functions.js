/*===================================================
Viewport width fit for Tablet
===================================================*/
var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
      || u.indexOf("ipad") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());

if(_ua.Tablet){
  $("meta[name='viewport']").attr('content', 'width=1100');
}

// Slider Index page
$('#sliderIndex').slick({
  dots: false,
  speed: 500,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  nextArrow: '<img class="left-arrow" src="/img/index/icon-slider.png"/>',
  prevArrow: '<img class="right-arrow" src="/img/index/icon-slider.png"/>',
});

// Slider About page
$('#sliderAbout').slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  arrows: false
});


/*-----------------------------------------------------------------------------------*/
    /* BACK TO TOP
    /*-----------------------------------------------------------------------------------*/
    $(window).scroll(function () {
      if ($(this).scrollTop() > 400) {
        $('.back-top').fadeIn();
      } else {
        $('.back-top').fadeOut();
      }
    });
    
    $('.back-top01').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
/*-----------------------------------------------------------------------------------*/
    /* Active menu
    /*-----------------------------------------------------------------------------------*/

  var href = window.location.pathname.split( '/' );
  var newPathname = href.slice(-1)[0];

  var topMenu = $('.c-gnavi ul li a');
  function activeMenu (value) {
    value.each(function(){
      var $this = $(this);
      if( $this.attr('href') == newPathname && $this.attr('href') != '' ) {
        $this.parents('li').addClass('is-active');
      }
    });
  }
  activeMenu(topMenu);
