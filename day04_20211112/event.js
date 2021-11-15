const ele1 = document.getElementById('id2');
// addEventListener('이벤트종류', 실행할함수)
// 매개변수 2개
// id2로 지정된 요소를 클릭했을 때 아래 내용을 출력.

ele1.addEventListener("click", function () {
    console.log('id2가 지정된 요소 클릭됨');
    // id2가 지정된 요소 클릭하면 기능을 실행시켜라. 
    // 'id2' => 'click' => function()
});

// id2 요소를 클릭했을 때 fun2함수 호출
ele1.addEventListener('click', fun2);

function fun2(){
console.log("fun2 함수 호출")

}

function fun1() { // 이때는 함수가 있기 때문에 <head>부분에 있어도 호출해서 실행이 가능
    console.log('함수 호출됨');
}