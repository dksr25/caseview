var objLink = document.createElement("link"); 
objLink.rel = "stylesheet"; 
objLink.type = "text/css"; 
objLink.href = "https://dksr25.github.io/caseview/css/style.css";
// objLink.href = "css/style.css"; 
document.head.appendChild(objLink);

(function ( $ ) {
  $.fn.caseOpen = function( options ) {
      settings = $.extend({
      zIndex: "1000",
      position: "bottom-left"
    }, options );
    maxHeight = window.innerHeight - 220;
    $('#caseview').css({"z-index":settings.zIndex}).addClass(settings.position);
    $('#caseview').append('<ul class="caseview_lst" /><button type="button" class="caseview_toggle" />');
    for (var i=1;i<=settings.caseLength;i++){
      var str = '<li><button type="button"><span class="txt"><span /></span></button></li>';
      $('.caseview_lst').append(str);
      eval("var newCase"+i+"=settings.case"+i+".split('?')");
      eval("$('.caseview_lst > li').eq("+(i-1)+").find('button').attr('onClick',newCase"+i+"[1]).find('.txt span').text(newCase"+i+"[0])"); 
    }
    $('.caseview_lst').find('button').on('click',function(){
      $(this).addClass('on').parent().siblings().find('button').removeClass('on');
    });
    $('.caseview_toggle').click(function(){
      caseToggle($(this));
      $('.caseview').css({'opacity':'1'});
      // closeTimer = setTimeout(function(){
      //   caseClose();
      // },15000);
    });
    $('.caseview_lst').find('button').on('click',function(){
      // clearTimeout(closeTimer);
      // closeTimer = setTimeout(function(){
      //   caseClose();
      // },15000);
    });
    $('#caseview').siblings().on('touchstart',function(){
      setTimeout(function(){
        $('.caseview').css({'opacity':'0.2'});
      },50)
    });
    $('#caseview').siblings().on('touchend',function(){
      $('.caseview').css({'opacity':'1'});
    });
    
    function caseToggle(aa) {
      $('.caseview_lst li').css({"transition":"all 0.5s"});
      if(aa.parent().hasClass('open')){
        caseClose();
      }
      else {
        caseDeploy();
      }
    }
    function caseClose () {
      $('.caseview_toggle').parent().removeClass('open');
      $('.caseview_lst').css({"max-height":maxHeight,"overflow-y":"hidden"});
      $('.caseview_lst').removeClass('scrolling');
      $('.caseview_lst').scrollTop(0);
    }
    function caseDeploy () {
      $('.caseview_toggle').parent().addClass('open');
      $('.caseview_lst').css({"max-height":maxHeight,"overflow-y":"auto"});
      setTimeout(function(){
        overflowHeight = $('.caseview_lst').prop('scrollHeight') - 10;
        scrollTest(maxHeight, overflowHeight);
      },700)
    }
    // $('.caseview_toggle').on('touchstart',function(event){
    //   startTime = Date.now();
    //   xStart = event.touches[0].clientX;
    //   yStart = event.touches[0].clientY;
    //   $(this).parent().css({'pointer-events':'auto'});
    // });
    // $('.caseview_toggle').on('touchmove', function(event){
    //   x = event.touches[0].clientX;
    //   y = event.touches[0].clientY;
    //   var deltaX = event.changedTouches[0].clientX - xStart;
    //   var deltaY = yStart - event.changedTouches[0].clientY;
    //   xMax = $(window).innerWidth() / 2;
    //   yMax = $(window).innerHeight() / 2;
    //   position = ['',''];
    //   // console.log(x+','+y);
    //   $(this).css({'transform':'translate('+deltaX+'px,'+(-deltaY)+'px)'});
    // });
    // $('.caseview_toggle').on('touchend',function(event){
    //   $(this).parent().css({'pointer-events':'none'});
    //   endTime = Date.now();
    //   touchDuration = endTime - startTime;
    //   var deltaX = event.changedTouches[0].clientX - xStart;
    //   var deltaY = yStart - event.changedTouches[0].clientY;
    //   var deltaC = Math.sqrt((deltaX*deltaX + deltaY*deltaY));
    //   angle = 0;
    //   aSection = 0;
    //   if (touchDuration>600) {
    //     if(y < yMax) {
    //       position[0] = 'top';
    //     }
    //     else {
    //       position[0] = 'bottom';
    //     }
    //     if(x < xMax) {
    //       position[1] = 'left';
    //     }
    //     else {
    //       position[1] = 'right';
    //     }
    //     positionC = position.join('-');
    //     $('.caseview').removeClass('top-right top-left bottom-right bottom-left').addClass(positionC);
    //     $(this).removeAttr('style');
    //   }
    //   else {
    //     if(deltaY>=0) {
    //       angle = Math.round(Math.acos(deltaX/deltaC)*180/Math.PI);
    //     }
    //     else {
    //       angle = Math.round(360 - Math.acos(deltaX/deltaC)*180/Math.PI);
    //     }
    //     if(deltaC>50) {
    //       angularSection(angle,$(this).parent());
    //     }
    //     else {
    //       $(this).parent().removeAttr('style').css({"z-index":settings.zIndex});
    //     }
    //   }  
    // });
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
    return this;
    function scrollTest(mH, oH){
      if(mH < oH) {
        $('.caseview_lst').addClass('scrolling');
      }
      else {
        $('.caseview_lst').removeClass('scrolling');
      }
    }
    // function angularSection (angle,target) {
    //   if(23 < angle && angle < 68) {
    //     aSection = 2;
    //     if(target.hasClass('bottom-left')) {
    //       target.removeClass('bottom-left').addClass('top-right');
    //     }
    //   }
    //   else if(69 < angle && angle < 114) {
    //     aSection = 3;
    //     if(target.hasClass('bottom-left')) {
    //       target.removeClass('bottom-left').addClass('top-left');
    //     }
    //     else if(target.hasClass('bottom-right')) {
    //       target.removeClass('bottom-right').addClass('top-right');
    //     }
    //   }
    //   else if(115 < angle && angle < 160) {
    //     aSection = 4;
    //     if(target.hasClass('bottom-right')) {
    //       target.removeClass('bottom-right').addClass('top-left');
    //     }
    //   }
    //   else if(161 < angle && angle < 206) {
    //     aSection = 5;
    //     if(target.hasClass('bottom-right')) {
    //       target.removeClass('bottom-right').addClass('bottom-left');
    //     }
    //     else if(target.hasClass('top-right')) {
    //       target.removeClass('top-right').addClass('top-left');
    //     }          
    //   }
    //   else if(207 < angle && angle < 252) {
    //     aSection = 6;
    //     if(target.hasClass('top-right')) {
    //       target.removeClass('top-right').addClass('bottom-left');
    //     }
    //   }
    //   else if(253 < angle && angle < 298) {
    //     aSection = 7;       
    //     if(target.hasClass('top-right')) {
    //       target.removeClass('top-right').addClass('bottom-right');
    //     }  
    //     else if(target.hasClass('top-left')) {
    //       target.removeClass('top-left').addClass('bottom-left');
    //     }
    //   }
    //   else if(299 < angle && angle < 344) {
    //     aSection = 8;          
    //     if(target.hasClass('top-left')) {
    //       target.removeClass('top-left').addClass('bottom-right');
    //     } 
    //   }
    //   else {
    //     aSection = 1;
    //     if(target.hasClass('top-left')) {
    //       target.removeClass('top-left').addClass('top-right');
    //     }    
    //     else if(target.hasClass('bottom-left')) {
    //       target.removeClass('bottom-left').addClass('bottom-right');
    //     }
    //   }
    //   $('.caseview_toggle').removeAttr('style');
    // }
  };
}( jQuery ));
window.onload = function(){
  setTimeout(function(){
    for (var n=1;n<=settings.caseLength;n++){
      var textLength = $('.caseview_lst li:nth-child('+n+')').find('.txt span').prop('scrollWidth');
      var over = 132 - textLength;
      var overDu = -(Math.round(over/28)-1);
      // var overDelay = (2 / overDu) * 100;
      if(textLength > 128) {
        $('.caseview_lst li:nth-child('+n+')').find('.txt span').addClass('long').css({'--overflow':over,'--overduration':overDu+'s'});
      }
    }
  },200)
}
