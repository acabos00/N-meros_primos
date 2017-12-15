function primos (numero){
    var i=2;
while (i<numero) {
    console.log(i);
    if (numero%i==0){
        return false; //  no es primo
    }
    i++;
 }
 return true; //  es primo
}


function day (dia){ // algoritmo para saber que día de la semana es 
    x = (a+b+c+d+e);
    x= x-7;
    while (x<7){
    if (x==1){
        return "Lunes"
    }
    if (x==2){
        return "Martes"
    }
    if (x==3){
        return "Miércoles"
    }
    if (x==4){
        return "Jueves"
    }
    if (x==5){
        return "Viernes"
    }
    if (x==6){
        return "Sábado"
    }
    if (x==0){
        return "Domingo"
    }
    else {
        return "algo pasa "
    }
    x++;
 }

}


function year (anyo){

    if (anyo>=1700 && anyo<=1799){
        return 5;
    }
    if (anyo>=1800 && anyo<=1899){
        return 3;
    }
    if (anyo>=1900 && anyo<=1999){
        return 1;
    }
    if (anyo>=2000 && anyo<=2099){
        return 0;
    }
    if (anyo>=2100 && anyo<=2199){
        return -2;
    }
    if (anyo>=2200 && anyo<=2290){
        return -4;
    }
}

function an (anyo){
    x = parseInt(anyo.toString().substr(-2));
    z = x + (Math.trunc (x/4));
    return z;
}


function bis(anyo) {
     if( (anyo%100!=0 || anyo%400==0) && anyo%4== 0){
        if (mes== 1|| mes ==2){
            return -1;
     }
     }else{
         return 0;
     }
    }
    

function month (mes) {
    if (mes == 1 || mes == 10 ){
        return 6 ;
    }
    if (mes == 2 || mes ==3 || mes == 11 ){
        return 2 ;
    }
    if (mes == 4 || mes == 7){
        return 5 ;
    }
    if (mes == 5){
        return 0 ;
    }
    if (mes == 6){
        return 3 ;
    }
    if (mes == 8){
        return 1 ;
    }
    if (mes == 9 || mes == 12){
        return 4 ;
    }
}

