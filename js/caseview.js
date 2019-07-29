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
      var str = '<li><button type="button"></button></li>';
      $('.caseview_lst').append(str);
      eval("var newCase"+i+"=settings.case"+i+".split('?')");
      eval("$('.caseview_lst > li').eq("+(i-1)+").find('button').attr('onClick',newCase"+i+"[1]).text(newCase"+i+"[0])"); 
    }
    $('.caseview_lst').find('button').on('click',function(){
      $(this).addClass('on').parent().siblings().find('button').removeClass('on');
    });
    return this;
  };
}( jQuery ));
$(document).ready(function(){
  maxHeight = window.innerHeight - 220;
  $('.caseview_toggle').click(function(){
    $('.caseview_lst li').css({"transition":"all 0.5s"});
    if($(this).parent().hasClass('open')){
      $('.caseview_lst').css({"max-height":"0","overflow-y":"hidden"});
    }
    else {
      $('.caseview_lst').css({"max-height":maxHeight})
      $('.caseview_lst').css({"overflow-y":"auto"});
      setTimeout(function(){
      },1100);  
    }
    $(this).parent().toggleClass('open');
  });
})
