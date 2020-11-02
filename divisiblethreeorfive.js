//type 1 using else if
function divisibleByThreeOrFive(num) {
    if (num % 5 == 0) {
        console.log("Number is divisible by 5")
    } else if (num % 3 == 0) {
        console.log("Number is divisible by 3")
    } else {
        console.log("Number is not divisible by 3 or 5")
    }
}
divisibleByThreeOrFive(15);
divisibleByThreeOrFive(9);

//type 2 using OR operator
function divisibleThreeFivebyOr(num){
    if (num % 5 == 0 || num % 3 ==0){
        console.log("Number is Divisible by 5 or 3")
    }else{
        console.log("number is not divisible by 5 or 3")
    }
}
divisibleThreeFivebyOr(15);
divisibleThreeFivebyOr(3);
