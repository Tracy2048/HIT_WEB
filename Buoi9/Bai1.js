function isPrime(a){
    if(a<2){
        return false;
    }
    if(a==2){
        return true;
    }
    for(var i=2; i<a/2;i++){
        if(a%i==0) return false;
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(10));