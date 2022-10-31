'use strict'
function cost(basket) {
    let cost=0
    for (let i of basket) {
        cost+=i.number*i.price;
    }
    return cost
}



const basket = new Array();
basket.push({name: 'Apple', number: '3', price: '25'});
basket.push({name: 'Pear', number: '4', price: '35'});
basket.push({name: 'Orange', number: '7', price: '60'});
basket.push({name: 'Potato', number: '10', price: '2'});
alert (cost(basket));