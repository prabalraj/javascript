function divisibleByTwoFour(num) {
    if (num % 4 == 0) {
        console.log("Number is divisible by 4")
    } else if (num % 2 == 0) {
        console.log("Number is divisible by 4 and 2")
    } else {
        console.log("Number is not divisible by 2 or 4")
    }
}
divisibleByTwoFour(8);
divisibleByTwoFour(9);
