 // 아이디
 function idCheck() {
    // 8~15자 이내로 아이디 입력 
    const idCk = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])[a-z\d!@#$%^&*()]{5,15}$/;
    const id = document.getElementById('id').value;
    console.log(id);
    const idCheckResult = document.getElementById('idCheckResult');

    if (id.length == 0) {
        idCheckResult.innerHTML = '필수항목입니다.'
        idCheckResult.style.color = 'red';
    } else {
        if (!id.match(idCk)) {
            idCheckResult.innerHTML = '5~15자 영문 소문자, 숫자, 특수기호를 사용하세요'
            idCheckResult.style.color = 'red';
        } else {
            idCheckResult.innerHTML = '좋습니다!'
            idCheckResult.style.color = 'green';

        }
    }
}

// 비밀번호 
function pwCheck() {
    // 8~15자 이내로 아이디 입력 
    const pwCondition = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;

    const pw = document.getElementById('pw').value;
    const pwCheckResult = document.getElementById('pwCheckResult');
    const pwLength = pw.length;

    if (pwLength == 0) {
        pwCheckResult.innerHTML = '필수항목입니다.'
        pwCheckResult.style.color = 'red';
    } else {
        if (!pw.match(pwCondition)) {
            pwCheckResult.innerHTML = '8~20자 영문 대 소문자, 숫자, 특수기호를 사용하세요.';
            pwCheckResult.style.color = 'red';
        } else {
            pwCheckResult.innerHTML = '좋습니다!'
            pwCheckResult.style.color = 'green';
        }
    }
}

// 비밀번호 중복확인
function pwDoubleCheck() {
    const pw = document.getElementById('pw').value; // 비밀번호값
    const pwDoubleCk = document.getElementById('pwDoubleCk').value; // 중복확인 비밀번호값
    const pwdcResult = document.getElementById('pwdcResult'); // 중복확인 결과값
    if (pwDoubleCk.length == 0) {
        pwdcResult.innerHTML = '비밀번호를 다시 한 번 입력하세요.'
    } else {
        if (pw == pwDoubleCk) {
            pwdcResult.innerHTML = '일치합니다.'
            pwdcResult.style.color = 'green';
        } else {
            pwdcResult.innerHTML = '비밀번호가 틀렸습니다.'
            pwdcResult.style.color = 'red';

        }
    }

}

//이메일 도메인주소 선택
function selectDomain() {
    const selectedDomain = document.getElementById('selectedDomain').value;
    const domainId = document.getElementById('domainId');
    domainId.value = selectedDomain;
}

// 전화번호
function phoneNum() {
    // 전화번호 불러오기
    const phone = document.getElementById('phone').value;
    const phoneCheck = document.getElementById('phoneCheck');
    // 조건
    const phoneCon = /^\d{3}-\d{4}-\d{4}$/;
    // console.log(phone);
    if(phone.length==0){
        phoneCheck.innerHTML = '전화번호를 입력하세요';
    } else {
        if(phone.match(phoneCon)){
            phoneCheck.innerHTML = '유효한 형식입니다.'
            phoneCheck.style.color = 'green';
        } else{
            phoneCheck.innerHTML = '유효하지 않은 형식입니다.'
            phoneCheck.style.color = 'red';
        }
    }
}
//가입완료
function joinResult(){
    alert('가입을 축하합니다!');
    location.href='./index.html';
}

