// // addevenet~

// const input1 = document.getElementById('id1');
// input1.addEventListener('keyup', fun1);

// const input2 = document.getElementById('id2');
// input2.addEventListener('blur', fun2);

// function fun1(){
//     let ele1 = document.getElementById('id1');
//     console.log(ele1.value);
  

// }

// function fun2(){
//     let ele2 = document.getElementById('id2');
//     console.log(ele2.value);
    
// }

// function fun3(){
//     let ele1 = document.getElementById('id1');
//     let num1 = ele1.value;
//     let ele2 = document.getElementById('id2');
//     let num2 = ele2.value;
//     let result = Number(num1) + Number(num2);
//     console.log(result);
// }

// function fun4(){
//     console.log(result);
// }

// 선생님

function cal(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(typeof(num1));
    console.log(typeof(num2));
    // string -> number 형변환
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(typeof(num1));
    console.log(typeof(num2));
    const sum = num1 + num2;
    
    console.log(sum);
    document.getElementById("result").innerHTML = sum;
    
    const result = document.getElementById('result');
    result.innerHTML = sum;
}

