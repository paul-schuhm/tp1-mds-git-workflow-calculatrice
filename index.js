let leftOperation = document.getElementById("left-operand")
let rightOperation = document.getElementById("right-operand")

const verify = (value) => {
  if(value){
    return parseInt(value)
  }
  return 0
}

const writeResult = (value) => {
  let result = document.getElementById("result")
  result.innerHTML = value
}

const calculate = () => {
  let leftValue = leftOperation.value
  let rightValue = rightOperation.value
  let value = verify(leftValue) + verify(rightValue)
  writeResult(value)
}

calculate()

leftOperation.addEventListener("change", () => calculate())
rightOperation.addEventListener("change", () => calculate())