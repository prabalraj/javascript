function printNum(){
    console.log("1");
    console.log("2");
    console.log("3");
    console.log("4");
    console.log("5");
    console.log("6");
    console.log("7");
    console.log("8");
    console.log("9");
    console.log("10");

}
printNum()

//tables of 5
function demo(num) {
    for (let i = 5; i <= num; i = i+5){
        console.log(i)
    }
}

demo(50)

//print numbers div by 3 and 5 btw 100
function demo(num) {
    let count = 0;
    for(let i = 1; i <= num; i++){
        if (i%3 == 0 && i%5 == 0){
            count = count +1
            console.log(i);
        }
    }
    console.log("between 1 to ",num , "number is divisible by 3 and 5 is = ",count);
 }
 
 demo(100)