// function cal(){
//     let ele1 = document.getElementById("score").value;
//     //  let ele2 = document.getElementById("grade");
//      let result = "";
  
//     if(ele1 >=0){
//         if(ele1>=90 && ele1<=100){
//            result = "a";
//         } else if(ele1>=80){
//            result = "b";
//         } else if(ele1>=70){
//             result = "c";
//         } else if(ele1>=60){
//             result = "d";
//         } else {
//             result = "f";
//         }
//     }
    
//     document.getElementById("result").innerHTML = result;
//     document.getElementById("grade").value = result;
   
    
  
// 선생님
function cal(){

// const score = document.getElementById("score");
// console.log(score);
//  => 이렇게 쓰면 입력한 값만 나오는게 아니라 전체 내용이 나옴

const scoreValue = document.getElementById("score").value;
console.log(scoreValue);
let grade;
if(scoreValue>=90){
    grade = "A";
} else if(scoreValue>=80){
    grade = "B";
} else {
    grade = "F";
}

// grade 변수값을 id=result 부분에 출력
const result = document.getElementById('result');
result.innerHTML = grade;

// grade 변수값을 id=grade 부분에 출력
const output = document.getElementById('grade');
output.value = grade;

}