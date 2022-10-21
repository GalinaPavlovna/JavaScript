'use strict';

function power(c,n) {
    if (n==1)
        return c;
    else
        return c*power(c,n-1);
    }

let a=+prompt('Число');
let b=+prompt('Степень');
alert(power(a,b));

