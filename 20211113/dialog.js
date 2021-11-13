// 함수 이름 : alertFunction

function alertFunction() {
    console.log('alert함수 호출');
    alert('안녕하세요!');
}


const button1 = document.getElementById('id2');
const button2 = document.getElementById('id3');

// 함수 이름 : confirmFunction => 선택하게 하는거
button1.addEventListener('click', function () {
    console.log('confirm함수 호출');
    const result = confirm('2021년에는 원하시는 것을 이루셨나요?');
    if (result) {
       alert('수고하셨어요! 2022년에도 화이팅!!'); // 안내창으로 뜸
       console.log('수고하셨어요! 2022년에도 화이팅!!') // console창에도 저장
    } else {
        alert('저런~ 2022년에는 꼭 모두 이루세요!')
    }
   // alert(result);

});


// 함수 이름 : promptFunction
button2.addEventListener('click', promptFunction);

function promptFunction() {
    console.log('prompt함수 호출됨');
    const userInput = prompt('당신의 이름은 무엇인가요?');
    alert(userInput + '님 환영합니다!');
}