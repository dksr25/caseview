## caseview

###  1.dom구조 세팅

~~~
<div id="caseview" class="caseview"></div>
~~~

다음과 같이 body가 닫히는 바로 위에 dom구조를 먼저 잡아주세요

### 2.script 호출

~~~
<div id="caseview" class="caseview"></div>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://dksr25.github.io/caseview/1.0.1/js/caseview.js"></script>
~~~

잡아놓은 dom구조 하단에 jquery와 caseview 스크립트를 호출해 주세요


### 3.옵션값 입력

~~~
<script>
$(document).ready(function(){
  $('#caseview').caseOpen({
    zIndex: "3000",
    position: "bottom-right",
    case: [
      [
        'bg-bluebg-bluebg-bluebg-bluebg-bluebg-blue',
        "$(body).css({'background-color':'#00f'}).find('h2').text('blue')"
      ],
      [
        "초록배경초록배경초록배경",
        "$(body).css({'background-color':'#0f0'}).find('h2').text('green')",
      ],
      [
        "bg-yellow",
        "$(body).css({'background-color':'#f90'}).find('h2').text('yellow')",
      ],
      [
        "bg-#CCC",
        "$(body).css({'background-color':'#ccc'}).find('h2').text('#CCC')",
      ],
      [
        "bg-red",
        "$(body).css({'background-color':'#f00'}).find('h2').text('red')",
      ],
    ]  
  })
});  
</script>
~~~

case: [] 로 케이스뷰에 들어갈 케이스 옵션 배열을 열어줍니다. <br>
그 안에 ['제목','클릭시 동작'] 순으로 옵션의 뱌열을 채워주세요. <br>zIndex 는 #caseview 에 style로 z-index 값을 부여합니다. 상황에 맞게 부여해주세요. 기본값은 1000 입니다. 

position 은 케이스뷰 모듈의 위치를 결정합니다. 'top-right' , 'top-left' , 'bottom-right' , 'bottom-left' 총 4가지 이며 기본값은 'bottom-left' 입니다.

또한 모바일 환경에서는 드래그하여 드래그가 끝나는 지점에서 가장 가까운 위치로 재위치 됩니다. 
