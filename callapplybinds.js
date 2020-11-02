let myObj = {name:"rajesh "};
function callApplyBind(rollnum,addr,phone){
    return this.name + rollnum + addr + phone
}

let k = callApplyBind.call(myObj , 1 ," bangalore ", 9876543210 );
console.log(k);

let n = callApplyBind.apply(myObj ,[ 2 ," chennai ", 9876543210]);
console.log(n);

let s = callApplyBind.bind(myObj)
x= s( 3 ," pune ", 9876543210)
console.log(x)