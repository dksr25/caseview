## caseview

#1.dom구조 세팅

'<div id="caseview" class="caseview">'
  '<ul class="caseview_lst">'
    '<li>'
      '<button>bg-blue</button>'  
    '</li>'
    '<li>'
      '<button>bg-green</button>'  
    '</li>'
    '<li>'
      '<button>bg-yellow</button>' 
    '</li>'
    ~~~~~~~~~~~~
    ~~~~~~~~~~~~
    '<li>'
      '<button>bg-#CCC</button>'  
    '</li>'
    '<li>'
      '<button>bg-red</button>'  
    '</li>'
    '<li>'
      '<button>bg-violet</button>'  
    '</li>'
  '</ul>'
  '<a href="#" class="caseview_toggle"></a>'
'</div>'

다음과 같이 body가 닫히는 바로 위에 dom구조를 먼저 잡아주세요 


'<div>'
	~~~~~~~~~
  '<a href="#" class="caseview_toggle"></a>'
'</div>'
'<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>'
'<script src="https://dksr25.github.io/caseview/js/caseview.js"></script>'

잡아놓은 dom구조 하단에 jquery와 caseview 스크립트를 호출해 주세요


'<script>'
'$(document).ready(function(){'
  '$('#caseview').caseOpen({'
    'zIndex: "3000",'
    'case1: "$(body).css({'background-color':'#00f'}).find('h2').text('blue')",'
    'case2: "$(body).css({'background-color':'#0f0'}).find('h2').text('green')",'
    'case3: "$(body).css({'background-color':'#f90'}).find('h2').text('yellow')",'
    'case4: "$(body).css({'background-color':'#ccc'}).find('h2').text('#CCC')",'
    'case5: "$(body).css({'background-color':'#f00'}).find('h2').text('red')",'
    'case6: "$(body).css({'background-color':'#f0f'}).find('h2').text('violet')"'
  '})'
'});' 
'</script>'

마지막으로 다음과 같이 잡아놓은 button의 갯수대로 각 버튼의 onclick 시 동작을 옵션값으로 순서대로 넣어주세요.

zIndex 는 #caseview 에 style로 z-index 값을 부여합니다. 상황에 맞게 부여해주세요. 기본값은 1000 입니다. 
