var objLink = document.createElement("link"); 
objLink.rel = "stylesheet"; 
objLink.type = "text/css"; 
objLink.href = "https://dksr25.github.io/caseview/1.0.1/css/style.css";
// objLink.href = "css/style.css"; 
document.head.appendChild(objLink);

(function ( $ ) {
  // option - setting
  $.fn.caseOpen = function( options ) {
      settings = $.extend({
      zIndex: "1000",
      position: "bottom-left",
      maxExpose: "0"
    }, options );
    // set max-height (by innerHeight)
    maxHeight = window.innerHeight - 220;
    // evaluate maxExpose option
    evalMaxExpose(settings.maxExpose,maxHeight);
    // set caseview css option(z-index, position)
    $('#caseview').css({"z-index":settings.zIndex}).addClass(settings.position);
    // set toggle button
    $('#caseview').append('<ul class="caseview_lst" /><button type="button" class="caseview_toggle" />');
    // set caseview buttons
    for (var i=0;i<settings.case.length;i++){
      var str = '<li><button type="button"><span class="txt"><span /></span></button></li>';
      $('.caseview_lst').append(str);
      $('.caseview_lst > li').eq(i).find('button').attr('onClick',settings.case[i][1]).find('.txt span').text(settings.case[i][0]); 
    }
    // set toggleclass to buttons
    $('.caseview_lst').find('button').on('click',function(){
      $(this).addClass('on').parent().siblings().find('button').removeClass('on');
    });
    // set togglebutton toggle
    $('.caseview_toggle').click(function(){
      caseToggle($(this));
      $('.caseview').css({'opacity':'1'});
    });
    // set opacity control - touch start - mobile only
    $('#caseview').siblings().on('touchstart',function(){
      // act after 100ms - tell touch is long or just click
      opacityTimer = setTimeout(function(){
        $('.caseview').css({'opacity':'0.2'});
      },100);
      // act phase2 caseclose - when touch is longer than 1300ms
      closeTimer = setTimeout(function(){
        if($('.caseview').hasClass('open')){
          caseClose();
          $('.caseview').addClass('ready');
        }
      },1300);
    });
    // set opacity control - touch end - mobile only
    $('#caseview').siblings().on('touchend',function(){
      // init opacity, caseclose
      clearTimeout(opacityTimer);
      clearTimeout(closeTimer);
      $('.caseview').css({'opacity':'1'});
      if($('.caseview').css('opacity') == '0.2') {
        $('.caseview').css({'opacity':'1'});
      }
      // case deploy - if case closed by touchstart
      if($('.caseview').hasClass('ready')){
        caseDeploy();;
        $('.caseview').removeClass('ready');
      }
    });
    // reset max-height, max-expose when wondow.resize
    $(window).resize(function(){
      maxHeight = window.innerHeight - 220;
      evalMaxExpose(settings.maxExpose,maxHeight);
      if($('#caseview').hasClass('open')) {
        $('.caseview_lst').css({"max-height":maxHeight,"overflow-y":"auto"});
        setTimeout(function(){
          overflowHeight = $('.caseview_lst').prop('scrollHeight') - 10;
          scrollTest(maxHeight, overflowHeight);
        },700)
      }
    });
    // shadow(visual feedback of scroll) control
    $('.caseview_lst').scroll(function(){
      innerST = $(this).scrollTop();
      innerSH = $(this).prop('scrollHeight') - 38;
      outerH = $(this).height();
      scrollH = innerSH - outerH;
      if(innerST >= scrollH) {
        $('.caseview_lst').removeClass('scrolling');
      }
      else {
        if(!$(this).parent().hasClass('open')){
          $('.caseview_lst').removeClass('scrolling');
        }
        else {
          $('.caseview_lst').addClass('scrolling');
        }
      }
    });
    // function - case toggle
    function caseToggle(aa) {
      $('.caseview_lst li').css({"transition":"all 0.5s"});
      if(aa.parent().hasClass('open')){
        caseClose();
      }
      else {
        caseDeploy();
      }
    }
    // function - case close
    function caseClose () {
      $('.caseview_toggle').parent().removeClass('open');
      $('.caseview_lst').css({"max-height":maxHeight,"overflow-y":"hidden"});
      $('.caseview_lst').removeClass('scrolling');
      $('.caseview_lst').scrollTop(0);
    }
    // function - case deploy
    function caseDeploy () {
      $('.caseview_toggle').parent().addClass('open');
      $('.caseview_lst').css({"max-height":maxHeight,"overflow-y":"auto"});
      setTimeout(function(){
        overflowHeight = $('.caseview_lst').prop('scrollHeight') - 10;
        scrollTest(maxHeight, overflowHeight);
      },700)
    }
    // function - shadow control
    function scrollTest(mH, oH){
      if(mH < oH) {
        $('.caseview_lst').addClass('scrolling');
      }
      else {
        $('.caseview_lst').removeClass('scrolling');
      }
    }
    // function evaluate maxExpose option
    function evalMaxExpose(maxExpose) {
      if(maxExpose.indexOf('px') == -1) {
        if(maxExpose > 0){
          maxExposeEval = (maxExpose * 28) + ((maxExpose - 1) * 10);
        }
        else {
          maxExposeEval = maxHeight;
        }
      }
      else {
        maxExpose = Number(maxExpose.replace('px',''));
        if(maxExpose > 0){
          maxExposeEval = maxExpose;
        }
        else {
          maxExposeEval = maxHeight;
        }
      }
      if(maxExposeEval < maxHeight) {
        maxHeight = maxExposeEval;
      }
    }
    return this;
  };
}( jQuery ));
window.onload = function(){
  setTimeout(function(){
    for (var n=1;n<=settings.case.length;n++){
      var textLength = $('.caseview_lst li:nth-child('+n+')').find('.txt span').prop('scrollWidth');
      var over = 132 - textLength;
      var overDu = -(Math.round(over/28)-1);
      // var overDelay = (2 / overDu) * 100;
      if(textLength > 128) {
        if(overDu <= 3) {
          $('.caseview_lst li:nth-child('+n+')').find('.txt span').addClass('short').css({'--overflow':over,'--overduration':overDu+'s'});
        }
        else {
          $('.caseview_lst li:nth-child('+n+')').find('.txt span').addClass('long').css({'--overflow':over,'--overduration':overDu+'s'});
        }
      }
    }
  },200)
}
