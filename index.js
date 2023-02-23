let leftOperation = document.getElementById("left-operand")
let rightOperation = document.getElementById("right-operand")
let result = document.getElementById("result")

result.innerHTML = parseInt(leftOperation.value) + parseInt(rightOperation.value);


leftOperation.addEventListener("change", ($event) => {
  if($event.target.value){
    result.innerHTML = parseInt($event.target.value) + parseInt(rightOperation.value);
  }else{
    leftOperation.value = 0
    result.innerHTML = parseInt($event.target.value) + parseInt(rightOperation.value);
  }
})

rightOperation.addEventListener("change", ($event) => {
  if($event.target.value){
    result.innerHTML = parseInt($event.target.value) + parseInt(leftOperation.value);
  }else{
    rightOperation.value = 0
    result.innerHTML = parseInt($event.target.value) + parseInt(leftOperation.value);
  }
})