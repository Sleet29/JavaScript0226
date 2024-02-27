var select = document.querySelector('#icon');
        var img = document.querySelector('#iconImg');
        
        select.addEventListener('change', show);
        
        
        function check() {
		    var id = document.getElementById('id').value.trim();
		    var pass = document.getElementById('pass').value.trim();
		    var jumin1 = document.getElementById('jumin1').value.trim();
		    var jumin2 = document.getElementById('jumin2').value.trim();
		    var email = document.getElementById('email').value.trim();
		    var domain = document.getElementById('domain').value.trim();
		    var hobbyChecked = document.querySelectorAll('input[name="hobby"]:checked').length;
		
		
		    // 주민등록번호 앞자리, 뒷자리 유효성 검사
		    var juminRegex = /^[0-9]{6}-[1234][0-9]{6}$/;
		    if (!juminRegex.test(jumin1 + '-' + jumin2)) {
		        alert('주민등록번호 형식을 확인하세요.');
		        return false;
		    }
		
		    // 성별 자동 체크
		    var genderMale = document.getElementById('gender1');
		    var genderFemale = document.getElementById('gender2');
		    var lastDigit = parseInt(jumin2.charAt(0));
		    if (lastDigit === 1 || lastDigit === 3) {
		        genderMale.checked = true;
		    } else if (lastDigit === 2 || lastDigit === 4) {
		        genderFemale.checked = true;
		    }
		
		    // 취미 체크
		    if (hobbyChecked < 2) {
		        alert('취미를 2개 이상 선택해주세요.');
		        return false;
		    }
		
		    // 나머지 필수 입력란 검사
		    if (!pass || !email || !domain) {
		        alert('항목을 모두 입력해주세요.');
		        return false;
		    }
		
		    return true;
}

			function idcheck() {
        	var id = document.getElementById("id");
		    var idRegex = /^[A-Z][a-zA-Z0-9_]{3,}$/;
        	if (id.value.trim() == "") {
        		alert("ID를 입력 하세요");
        		id.focus();
        	} else {
				// 사용자가 입력한 방식을 get방식으로 넘김
				var ref = "idcheck.html?id=" + id.value;
				
				// 팝업창을 이용해 자료 넘김
				window.open(ref,"","width=300, height=250") 
			}
		    // 아이디 중복 검사
		    if (!idRegex.test(id)) {
		        alert('첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다.');
		        return false;
		    }
		} // idcheck()


		function move() {
			var jumin1 = document.getElementById("jumin1");
			var jumin2 = document.getElementById("jumin2");
			
			// 주민번호 앞자리 6자리인 경우
			if(jumin1.value.trim().length == 6) {
				if(!isNaN(jumin1.value)) { // 6자리가 숫자인 경우
					jumin2.focus();
				} else { // 6자리가 숫자가 아닌 경우
					alert("숫자로 입력하세요");
					jumin1.value = '';  // 앞자리 모두 초기화
					jumin1.focus();		// 앞자리에 포커스 준다.
				}
			}
			
			if(jumin2.value.trim().length == 7) {
				if(!isNaN(jumin2.value)) { 
					alert("숫자로 입력하세요");
					jumin2.value = ''; 
					jumin2.focus();		
				} // if
			} // if
		}

	function domain1() {
	    	var sel = document.getElementById('sel');
	    	var domain = document.getElementById('domain');
	    	if (sel.value == "") {  // 직접입력 선택된 경우
	    		domain.readOnly = false;
	    		domain.value = "";
	    		domain.focus();
	    	} else { // option 중에서 선택한 경우
	    		domain.readOnly = true; // 수정 불가
	    		domain.value = sel.value;
	    	}
	    }

function post() {
    window.open('post.html', 'post', 'width=400, height=500');
}


			
			