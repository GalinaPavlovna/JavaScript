'use strict';

function summ(v1,v2){
    return v1+v2;
    }

function subs(v1,v2){
    return v1-v2;
    }

function mult(v1,v2){
    return v1*v2;
    }

function divs(v1,v2){
    return v1/v2;
    }

function calkulator(v1,v2,act){
    switch (act) {
        case '+': return summ(v1,v2);
        case '-': return subs(v1,v2);
        case '*': return mult(v1,v2);
        case '/': return divs(v1,v2);
        default: return 'Такого действия не знаю'
    }
}

let a=+prompt('Первое число');
let b=+prompt('Второе число');
let c=prompt('Введите знак действия');
alert(calkulator(a,b,c));
