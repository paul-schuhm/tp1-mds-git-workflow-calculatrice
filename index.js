const leftOperandInput = document.getElementById("left-operand");
const rightOperandInput = document.getElementById("right-operand");
const resultElement = document.getElementById("result");

function calculate() {
  const leftOperand = Number(leftOperandInput.value);
  const rightOperand = Number(rightOperandInput.value);
  const result = leftOperand + rightOperand;
  resultElement.textContent = result;
}

leftOperandInput.addEventListener("input", calculate);
rightOperandInput.addEventListener("input", calculate);

calculate();
