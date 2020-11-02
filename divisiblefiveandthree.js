//using AND operator
function divisibleThreeAndFive(num){
    if (num % 5 == 0 && num % 3 ==0){
        console.log("Number is Divisible by 5 and 3")
    }else{
        console.log("number is not divisible by 5 and 3")
    }
}
divisibleThreeAndFive(15);
divisibleThreeAndFive(3);
    