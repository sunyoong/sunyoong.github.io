const input1 = document.getElementById('id1');
input1.addEventListener('ketup', fun1);

const input2 = document.getElementById('id2');
input2.addEventListener('blur', fun2);

function fun1(){
    // console.log("함수호출")
    const ele = document.getElementById('id1');
    console.log(ele.value);
}

function fun2(){
    console.log('onblur');
    //커서가 인사말2에 있다가 다른데로 가면 onblur 실행됨
    const ele = document.getElementById('id2');
    console.log(ele.value); 
    // value는 입력된 값
}

function fun3(){
    const ele = document.getElementById('id3');
    // console.log(ele.value);
    // ele.value = '이 내용은 어디에 나올까요';
    const text = "하하하하";
    ele.value = text;
}
// 순서 : 1. body부분 인사말3의 id3 속성에 버튼에 fun3()함수
    //    2. 스크립트에서 fun3()함수 기능을 만든다
    //    3. fun3() 함수는 id3 속성값을 가져와서 입력값을 출력함

