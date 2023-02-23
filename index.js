const leftOperandInput = document.getElementById("left-operand");
const rightOperandInput = document.getElementById("right-operand");
const resultElement = document.getElementById("result");
const operationSelect = document.getElementById("operation");

function calculate() {
  const leftOperand = Number(leftOperandInput.value);
  const rightOperand = Number(rightOperandInput.value);
  let result;
  const operation = operationSelect.value;
  switch (operation) {
    case "addition":
      result = leftOperand + rightOperand;
      break;
    case "subtraction":
      result = leftOperand - rightOperand;
      break;
    case "multiplication":
      result = leftOperand * rightOperand;
      break;
    case "division":
      result = leftOperand / rightOperand;
      break;
    default:
      result = "Invalid operation";
  }
  resultElement.textContent = result;
}

leftOperandInput.addEventListener("input", calculate);
rightOperandInput.addEventListener("input", calculate);
operationSelect.addEventListener("change", calculate);

calculate();
