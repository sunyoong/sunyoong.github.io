const pwInputResult = document.getElementById('password');
pwInputResult.addEventListener('keyup', fun1);
let pwIR = pwInputResult.value.length
let result;
function fun1(){
    if(pwIR<8 || pwIR>20){
        result = '8~20자리로 입력해주세요'
    } else {
        result = '좋습니다'
    }
}

