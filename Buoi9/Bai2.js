function run(obj){
    var arr=[]
    for(let i in obj){
        arr.push(i + ": " + obj[i])
    }
    return arr
}

const obj = {
    name: "Hưng",
    age: 20,
    email: "dth27902@gamil.com"
}
console.log(run(obj));