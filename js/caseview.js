var objLink = document.createElement("link"); 
objLink.rel = "stylesheet"; 
objLink.type = "text/css"; 
objLink.href = "https://dksr25.github.io/caseview/css/style.css";
// objLink.href = "css/style.css"; 
document.head.appendChild(objLink);

(function ( $ ) {
  $.fn.caseOpen = function( options ) {
    var settings = $.extend({
        zIndex: "1000"
    }, options );
    $('#caseview').css({"z-index":settings.zIndex});
    for (var i=1;i<=settings.caseLength;i++){
      var str = '<li><button type="button"><span class="txt"><span /></span></button></li>';
      $('.caseview_lst').append(str);
      eval("var newCase"+i+"=settings.case"+i+".split('?')");
      eval("$('.caseview_lst > li').eq("+(i-1)+").find('button').attr('onClick',newCase"+i+"[1]).find('.txt span').text(newCase"+i+"[0])"); 
    }
    $('.caseview_lst').find('button').on('click',function(){
      $(this).addClass('on').parent().siblings().find('button').removeClass('on');
    });
    window.onload = function(){
      setTimeout(function(){
        for (var n=1;n<=settings.caseLength;n++){
          var textLength = $('.caseview_lst li:nth-child('+n+')').find('.txt span').prop('scrollWidth');
          var over = 140 - textLength;
          var overDu = -(Math.round(over/28)-1)+'s';
          if(textLength > 128) {
            $('.caseview_lst li:nth-child('+n+')').find('.txt span').addClass('long').css({'--overflow':over,'--overduration':overDu});
          }
        }
      },200)
    }
    return this;
  };
}( jQuery ));
$(document).ready(function(){
  maxHeight = window.innerHeight - 220;
  $(window).resize(function(){
    maxHeight = window.innerHeight - 220;
    if($('#caseview').hasClass('open')) {
      $('.caseview_lst').css({"max-height":maxHeight,"overflow-y":"auto"});
      setTimeout(function(){
        overflowHeight = $('.caseview_lst').prop('scrollHeight') - 10;
        scrollTest(maxHeight, overflowHeight);
      },700)
    }
  });
  $('.caseview_toggle').click(function(){
    $('.caseview_lst li').css({"transition":"all 0.5s"});
    if($(this).parent().hasClass('open')){
      $(this).parent().removeClass('open');
      $('.caseview_lst').css({"max-height":"0","overflow-y":"hidden"});
      $('.caseview_lst').removeClass('scrolling');
      $('.caseview_lst').scrollTop(0);
    }
    else {
      $(this).parent().addClass('open');
      $('.caseview_lst').css({"max-height":maxHeight,"overflow-y":"auto"});
      setTimeout(function(){
        overflowHeight = $('.caseview_lst').prop('scrollHeight') - 10;
        scrollTest(maxHeight, overflowHeight);
      },700)
    }
  });
  $('.caseview_lst').scroll(function(){
    innerST = $(this).scrollTop();
    if(innerST > 0) {
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
  function scrollTest(mH, oH){
    if(mH < oH) {
      $('.caseview_lst').addClass('scrolling');
      console.log(mH,oH);
    }
    else {
      $('.caseview_lst').removeClass('scrolling');
    }
  }
})
