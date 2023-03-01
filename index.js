let operands = document.querySelectorAll('.operand');

operands.forEach((operand) => {
    operand.addEventListener('input', ()=>{
        let res = 0;
        operands.forEach((operandCalc)=>{
            console.log(operandCalc)
            res += operandCalc.valueAsNumber;
        })
        document.querySelector('#result').innerHTML = res;
    })
})
