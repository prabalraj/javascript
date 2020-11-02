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