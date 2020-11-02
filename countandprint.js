function countPrint(num) {
    let count = 0;
    for (let i = 1; i < num; i++) {
        if (i % 3 == 0 && i % 7 == 0) {
            count = count + 1
            console.log(i)
        }
    }
    console.log(count, "numbers are divisible by 3 and 7 in", num)
}
countPrint(100)