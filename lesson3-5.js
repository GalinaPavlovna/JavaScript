'use strict';
const n=20;
let strn='';
for (let i=1; i<=n; i++) {
    for (let j=1; j<=i; j++) strn=strn + '*';
    console.log(strn);
    strn='';
};
alert('Ok');