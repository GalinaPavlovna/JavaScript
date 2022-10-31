'use strict';
const n=100;
let arr= new Array(n);
let k=0;
for (let i=0; (i <= n); i++) {
    arr[i]=i;
};

for (let i=2;i<=n;i++) {
    if (arr[i]==0) continue;
    k=2*i
    while (k<=n) {
        arr[k]=0;
        k+=i;
    };
};

let rez = [1, 5];
rez = arr.filter(x => x>0);
alert(rez);
