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


function day (dia,mes,anyo){ // algoritmo para saber que día de la semana es 
    a = year (anyo);
    b = an (anyo);
    c = bis (anyo,mes);
    d = month (mes);
    e = parseInt(dia);
    x = (a+b+c+d+e);
    x= x%7;
    
    while (x<7){ // función para los días de la semana
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
            x=x-7;
            
            
        }
    }
}


function horoscopo(mes,e){ // función para saber horóscopo
    if ((mes== 3 && e<22) || (mes == 4 && e<=20)){
        return "aries";
    }
    if ((mes== 4 && e>=21) ||(mes == 5 && e<=21)){
        return "tauro";
    }
    if ((mes== 5 && e<22) || (mes == 6 && e<=22)){
        return "géminis";
    }
    if ((mes== 6 && e>=23) || (mes == 7 && e<=23)){
        return "cáncer";
    }
    if ((mes== 7 && e<25) ||(mes == 8 && e<=23)){
        return "leo";
    }
    if ((mes== 8 && e>=25) || (mes == 9 && e<=23)){
        return "virgo";
    }
    if ((mes== 9 && e<25) || (mes == 10 && e<=23)){
        return "libra";
    }
    if ((mes== 10 && e>=24) || (mes == 11 && e<=22)){
        return "escorpio";
    }
    if ((mes== 11 && e<24) || (mes == 12 && e<=21)){
        return "sagitario";
    }
    if ((mes== 12 && e>=22) || (mes == 1 && e<=20)){
        return "capricornio";
    }
    if ((mes== 1 && e>=21) || (mes == 2 && e<=19)){
        return "acuario";
    }
    if ((mes== 2 && e>=20) || (mes == 3 && e<=20)){
        return "piscis";
    }
    
    
}

function year (anyo){ // función siglo
    
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


function bis(anyo,mes) { // bisiesto?
    
    if( (anyo%100!=0 || anyo%400==0) && anyo%4== 0){
        if (mes== 1|| mes ==2){
            return -1; // era bisiesto y además enero o febrero
        }
        else{
            return 0;
        }
    } else {
        return 0;
    }
}    

function month (mes) { // mes
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

