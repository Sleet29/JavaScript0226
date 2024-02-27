		var select = document.querySelector('#icon');
        var img = document.querySelector('#iconImg');
        
        select.addEventListener('change', show);
        
        function check() {
        	var id = document.getElementById("id");
        	if (id.value.trim() == "") {
        		alert("ID를 입력 하세요");
        		id.focus();
        		return false;
        	}
        	
        	var id = document.getElementById("pass");
        	if (id.value.trim() == "") {
        		alert("비밀번호 입력 하세요");
        		id.focus();
        		return false;
        	}
        	
        	var jumin1 = document.getElementById("jumin1");
        	if (id.value.trim() == "") {
        		alert("주민번호 앞자리를 입력 하세요");
        		id.focus();
        		return false;
        	}
        	
        	if (jumin1.value.length != 6) {
        		alert("주민번호 앞자리 6자리를 입력하세요");
        		jumin1.value = "";
        		jumin1.focus();
        		return false;
        	}
        	
        	var jumin2 = document.getElementById("jumin2");
        	if (id.value.trim() == "") {
        		alert("주민번호 뒷자리를 입력 하세요");
        		jumin2.focus();
        		return false;
        	}
        	
        	if (jumin2.value.length != 7) {
        		alert("주민번호 뒷자리 7자리를 입력하세요");
        		jumin2.value = "";
        		jumin2.focus();
        		return false;
        	}
        	
        	var id = document.getElementById("email");
        	if (id.value.trim() == "") {
        		alert("이메일을 입력 하세요");
        		id.focus();
        		return false;
        	}
        	
        	var id = document.getElementById("domain");
        	if (id.value.trim() == "") {
        		alert("도메인을 입력 하세요");
        		id.focus();
        		return false;
        	}
        	
        	var id = document.getElementById("hobbyChecked");
        	if (id.value.trim() == "") {
        		alert("취미를 입력 하세요");
        		id.focus();
        		return false;
        	}
        	
            var id = document.getElementById('id').value.trim();
            var pass = document.getElementById('pass').value.trim();
            var jumin1 = document.getElementById('jumin1').value.trim();
            var jumin2 = document.getElementById('jumin2').value.trim();
            var email = document.getElementById('email').value.trim();
            var domain = document.getElementById('domain').value.trim();
            var hobbyChecked = document.querySelectorAll('input[name="hobby"]:checked').length;

            if (!id || !pass || !jumin1 || !jumin2 || !email || !domain || !hobbyChecked) {
                alert('항목을 모두 입력해주세요.');
                return false;
            }

            if (hobbyChecked < 2) {
                alert('취미를 2개 이상 선택해주세요.');
                return false;
            }

            return true;
        }

        function idcheck() {
        	var id = document.getElementById("id");
        		if (id.value.trim() == "") {
	        		alert("ID를 입력 하세요");
	        		id.focus();
        		} else { // ID를 입력했을 경우
        			 // 첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상
        			 // ^ : 시작
        			 // $ : 끝
        			var pattern = /^[A-Z][a-zA-Z_0-9]{3,}$/;
        				if (pattern.test(id.value)) { // id 값이 정규 표현식을 만족하는지 체크합니다.
        									  // 만족하면 true, 만족하지 않으면 false를 반환합니다.
        									  
		        			// 사용자가 입력한 방식을 get방식으로 넘김.
							// var ref = "idcheck.html?id=" + id.value; (밑과 같지만 밑이 더 편리)
							var ref = `idcheck.html?id=${id.value}`;
        									  
							// 팝업창을 이용해 자료 넘김		
							window.open(ref,"","width=300, height=250") 
						} else {
							alert("첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다.");
							id.value = '';
							id.focus();
						}
				} // idcheck()
		}

        function move() {
			var jumin1 = document.getElementById("jumin1");
			var jumin2 = document.getElementById("jumin2");
			
			// 주민번호 앞자리 6자리인 경우
			if(jumin1.value.trim().length == 6) {
				
				var pattern = /^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|[3][01])$/;
				if(pattern.test(jumin1.value)) { // 6자리가 숫자인 경우
					jumin2.focus();
				} else { // 6자리가 숫자가 아닌 경우
					alert("숫자로 입력하세요");
					jumin1.value = '';  // 앞자리 모두 초기화
					jumin1.focus();		// 앞자리에 포커스 준다.
				}
			}
			
			// 주민번호 뒷자리 7자리인 경우
			if(jumin2.value.trim().length == 7) {
				pattern = /^[1234][0-9]{6}$/;
				if(pattern.test(jumin2.value)) {
					// 주민번호 뒷자리에 따라 남자 여자 성별 라디오 버튼 자동 선택 
					var c = Number(jumin2.value.substring(0,1));
					var index = (c - 1) % 2; // c=1 또는 3이면 index = 0 =>1 =>"gender1"
											 // c=2 또는 4이면 index = 1 =>2 =>"gender2"
					var gender = document.getElementById("gender" + (index+1));
					
					gender.checked = true;
				} else {
					alert("형식에 맞게 입력하세요");
					jumin2.value = '';
					jumin2.focus();
				} // if
			} // if
		}
		

        function domain1() {
	    	var sel = document.getElementById("sel");
	    	var domain = document.getElementById("domain");
	    	if (sel.value == "") {  // 직접입력 선택된 경우
	    		domain.readOnly = false;
	    		domain.value = "";
	    		domain.focus();
	    	} else { // option 중에서 선택한 경우
	    		domain.readOnly = true; // 수정 불가
	    		domain.value = sel.value;
	    	}
	    }
		
		/*
	   	var reg=/^[0-9]{2}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])-[1234][0-9]{6}$/;
	   		// 년도(뒤의 두자리)		월					일				하이픈	뒷자리(성별빼고 6자리)
	   	do {
			   var jumin = prompt("주민번호를 입력하세요?", "810908-3234567");
			   var pandan = reg.test(jumin);
			   if(!pandan) {
				   alert("주민번호 형식을 확인하세요");
			   }
		   } while(!pandan);
		   
		   var test = jumin.substr(7,1);
		   if(test == "1" || test == "3"){
			   document.write("<div>남자</div>");
			   document.body.style.background="#565698";
		   } else if(test == "2" || test == "4") {
			   document.write("<div>여자</div>");
			   document.body.sytle.background='pink';
		   }
		*/
			function setGender() {
			    var jumin1 = document.getElementById("jumin1").value.trim();
			    var genderMale = document.getElementById("gender1");
			    var genderFemale = document.getElementById("gender2");
			    
			    if (isNaN(jumin1)) {
			        alert('주민등록번호 앞자리에는 숫자만 입력하세요.');
			        document.getElementById("jumin1").value = ""; // 입력된 값을 비워줌
			        document.getElementById("jumin1").focus(); // 다시 입력란에 포커스
			        return;
			    }
		
			    if (jumin1.length >= 1) {
			        var firstDigit = parseInt(jumin1.charAt(0));
			        if (firstDigit === 1 || firstDigit === 3) {
			            genderMale.checked = true;
			        } else if (firstDigit === 2 || firstDigit === 4) {
			            genderFemale.checked = true;
			        } else {
			        }
			    }
			}

	       


        function post() {
            window.open('post.html', '', 'width=400, height=500');
        }
        
        
       
		
		
	    
