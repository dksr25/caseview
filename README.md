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
<script src="https://dksr25.github.io/caseview/js/caseview.js"></script>
~~~

잡아놓은 dom구조 하단에 jquery와 caseview 스크립트를 호출해 주세요


### 3.옵션값 입력

~~~
<script>
$(document).ready(function(){
  $('#caseview').caseOpen({
    zIndex: "3000",
    caseLength: "6",
    case1: "bg-blue,$(body).css({'background-color':'#00f'}).find('h2').text('blue')",
    case2: "bg-yellow,$(body).css({'background-color':'#0f0'}).find('h2').text('green')",
    case3: "bg-green,$(body).css({'background-color':'#f90'}).find('h2').text('yellow')",
    case4: "bg-#CCC,$(body).css({'background-color':'#ccc'}).find('h2').text('#CCC')",
    case5: "bg-red,$(body).css({'background-color':'#f00'}).find('h2').text('red')",
    case6: "bg-violet,$(body).css({'background-color':'#f0f'}).find('h2').text('violet')"
  })
});  
</script>
~~~

마지막으로 옵션값 설정 입니다. case 갯수만큼 'caseLength' 값을 부여해 주세요.
케이스 갯수에 맞게 caseN: "케이스텍스트, 클릭시 동작구문" 값을 설정해 주세요. 

zIndex 는 #caseview 에 style로 z-index 값을 부여합니다. 상황에 맞게 부여해주세요. 기본값은 1000 입니다. 
