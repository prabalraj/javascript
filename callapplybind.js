let myObj = {num:5};
function callApplyBind(a,b,c){
    console.log(this.num);
    return this.num+a+b+c
}

//let out = callApplyBind.call(myObj,1,2,3);
//console.log(out);

//let out = callApplyBind.apply(myObj,[1,2,3]);
//console.log(out);

let out = callApplyBind.bind(myObj);
let x = out(1,2,3);
console.log(x);