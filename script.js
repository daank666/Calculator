const resultElement = document.getElementById('result');
// resultElement.textContent = 42-2
// console.log(resultElement.textContent)
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitButton = document.getElementById('submit')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
let action = "";

plusButton.onclick = function(){
    action = "+";
}
minusButton.onclick = function(){
    action = "-";
}
function printResult(result){
    if(result < 0){
        resultElement.style.color = "red"
    }
    else {
        resultElement.style.color = "green"
    }
    resultElement.textContent = result;
}
submitButton.addEventListener('click',()=>{
    if(action == "+"){
        const sum = Number(input1.value) + Number(input2.value);
        printResult(sum)
    }
    else if(action == "-"){
        const sum = Number(input1.value) - Number(input2.value);
        printResult(sum)
    }
})