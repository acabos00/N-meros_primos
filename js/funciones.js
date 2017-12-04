function primos (numero){
    var i=2
while (i<numero) {
    console.log(i);
    if (numero%i==0){
        return false; //  no es primo
    }
    i++;
 }
 return true; //  es primo
}