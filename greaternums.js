function greaterNum (num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log("greater number is ", num1)
    }else if(num2 > num1 && num2 > num3){
        console.log("greater number is ", num2)
    }else{
        console.log("greater number is", num3)
    }
}
greaterNum(3,6,7)