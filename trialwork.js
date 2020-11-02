let obj = {name : "Prabal"};
function newThing(a,b){
    return this.name + a + b;
}

let n = newThing.call(obj, "is" , "good")
console.log(n);

let k = newThing.apply(obj,["is","good"]);
console.log(k)

let t = newThing.bind(obj);
let x = t("is","good")
console.log(x)