function add(a,b){
    return a+b;
}

let sub = (a,b) => {
    return a - b;
}

function call(num1,num2,callback){
    return callback(num1,num2)


}


let x = call(3,5,add)
console.log(x)

let y = call(4,2,sub)
console.log(y) 