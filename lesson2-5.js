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

let a=+prompt('Первое число');
let b=+prompt('Второе число');

alert('Сумма '+summ(a,b))
alert('Разность '+subs(a,b))
alert('Произведение '+mult(a,b))
alert('Частное '+divs(a,b))