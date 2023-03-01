let operands = document.querySelectorAll('.operand');

operands.forEach((operand) => {
    operand.addEventListener('input', ()=>{
        let res = 0;
        operands.forEach((operandCalc)=>{
            
            res += !isNaN(operandCalc.valueAsNumber) ? operandCalc.valueAsNumber : 0 ;
        })
            document.querySelector('#result').innerHTML = res;
    })
})
