/**
 * return result of sum operation 
 */
function sumOp(){
    var nbleft = document.getElementById('left-operand').value
    var nbright = document.getElementById('right-operand').value
    var res = parseInt(nbleft) + parseInt(nbright)
    printResult(res)
}

/**
 * display the result to the user
 */
function printResult(result){
    document.getElementById('result').innerText = result
}