$(function(){
    // ?????????????????????????
    $('.row').slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 1000,
      dots: true,
      fade: true,
    });

    // a1 backgroundcolor
    $('button[name="a1"]').on("click", function() {
        $('#is-preload').css('background-image','url(assets/css/images/bg2.jpg)');
    });
    // a2 headercolor
    $('button[name="a2"]').on("click", function() {
        $('#home').css('background-color','#ffff00');
    });
    // Clear
    $('#back1').on("click", function() {
        $('#is-preload').css('background-image','url(assets/css/images/bg.jpg)');
        $('#home').css('background-color','white');
    });

    // b1 size
    $('button[name="b1"]').on("click", function() {
        $('#row').css({'width':'30%','height':'30%'});
    });
    // b2 speed
    $('button[name="b2"]').on("click", function() {
        $('.row').slick("slickSetOption", "autoplaySpeed", 1);
    });
    // Clear
    $('#back2').on("click", function() {
        $('#row').css({'width':'50%','height':'50%'});
        $('.row').slick("slickSetOption", "autoplaySpeed", 1000);
    });

    // c1 truefont
    $('button[name="c1"]').on("click", function() {
        $('#pro').css('font-family','serif'); // ?????
    });
    // c2 falsefont
    $('button[name="c2"]').on("click", function() {
        $('#pro').css('color','red'); // ??????
    });
    // Clear    
    $('#back3').on("click", function() {
        $('#pro').css('font-family','sans-serif');
        $('#pro').css('color','#AAAAAA');
    });
  });