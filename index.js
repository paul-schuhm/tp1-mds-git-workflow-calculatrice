/**
 * return result of sum operation 
 */
function sumOp(){
    var nbleft = document.getElementById('left-operand').value
    var nbright = document.getElementById('right-operand').value
    console.log(nbleft)
    console.log(nbright)
    var res = parseInt(nbleft) + parseInt(nbright)
    //return res
    display(res)
}

/**
 * display the result to the user
 */
function display(result){
    document.getElementById('result').innerText = result
}