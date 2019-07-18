// (function() {
// var startingTime = new Date().getTime();
// var script = document.createElement("SCRIPT");
// script.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
// document.getElementsByTagName("head")[0].appendChild(script);
// // Poll for jQuery to come into existance
// var checkReady = function(callback) {
//   if (window.jQuery) {
//       callback(jQuery);
//   }
//   else {
//     window.setTimeout(function() { checkReady(callback); }, 20);
//   }
// };
// // Start polling...


// checkReady(function($) {
//   (function ( $ ) {
//     $.fn.caseOpen = function( options ) {
//       var settings = $.extend({
//           num: "0",
//           case1: "0",
//           case2: "0",
//       }, options );
//       return this;
//     };
//   }( jQuery ));
//   $(function() {
//     var caseLength = $('#caseview > caseview_lst > li').length;
//     settings.num = caseLength;
//     for (var i=0;i<caseLength - 1;i++){
//       eval("settings.case"+i+"="+i);
//       console.log(settings.case2);
//     }
//     $('.caseview_toggle').click(function(){
//       $(this).parent().toggleClass('open');
//     }); 

//     // $('.caseview_lst li').find('button').attr();
//   });
// });
// })();






var objLink = document.createElement("link"); 
objLink.rel = "stylesheet"; 
objLink.type = "text/css"; 
objLink.href = "https://dksr25.github.io/caseview/css/style.css"; 
document.head.appendChild(objLink);

var fontLink = document.createElement("link"); 
fontLink.rel = "stylesheet"; 
fontLink.type = "text/css"; 
fontLink.href = "https://fonts.googleapis.com/css?family=Black+Han+Sans&display=swap"; 
document.head.appendChild(fontLink);

(function ( $ ) {
  caseLength = $('.caseview_lst > li').length;
  $.fn.caseOpen = function( options ) {
    var settings = $.extend({
        zIndex: "1000"
    }, options );
    $('#caseview').css({"z-index":settings.zIndex});
    for (var i=1;i<=caseLength;i++){
      eval("var newCase"+i+"=settings.case"+i);
      eval("$('.caseview_lst > li').eq("+(i-1)+").find('button').attr('onClick',settings.case"+i+")"); 
    }
    return this;
  };
}( jQuery ));
$(document).ready(function(){
  maxHeight = window.innerHeight - 220;
  $('.caseview_toggle').click(function(){
    $('.caseview_lst li').css({"transition":"all 0.5s"});
    if($(this).parent().hasClass('open')){
      $('.caseview_lst').css({"max-height":"unset","overflow-y":"hidden"});
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
