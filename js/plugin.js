//Пересенные задачи(var)
//1 азвания для переменных
var price = 20;
price = 40;

var MAX_NUMBER = 10;

var USERNAME = 'Sasha';

var userInfo = 'bold'
userInfo = 'skiny'

let string = 'some test string'
console.log(string[0], string[string.length - 1]);
//2 ???
let result1 = string[0].toUpperCase() + string.slice(1 , 15)
console.log(result1);
//3
let result2 = string.indexOf('string');
console.log(result2);
//4
let result3 = string.lastIndexOf(' ');
console.log(result3);
//5
let cut = string.substr(5, 4)
console.log(cut)
//6
let cut1 = string.slice(5, 9);
console.log(cut1);
//7
let cut3 = string.slice(0, -6);
console.log(cut3)
//8
let a1 = '20'
    b1 = '16'
let string1 = a1 + b1;
console.log(string1)

//Числа
//1
let pi = 3.14
let math = (pi).toFixed(1)
console.log(math)

//2
let minNumber;
minNumber = Math.min(15, 11, 12, 51, 12, 13, 51) + ' ' + Math.max(15, 11, 12, 51, 12, 13, 51)
console.log(minNumber)

//3
let x = (Math.random()).toFixed(2)
console.log(x)

let min = 0;
    max = 100;
let rand = min + Math.random() * (max + 1 - min);
k = Math.floor(rand);
console.log(k)

//4
let a = 0.6;
    b = 0.7;
    c = (a + b).toFixed(1)
console.log(c);

    //5
let number = '100$'
let num;
num = parseFloat(number)
console.log(num)

//Задачи
let product =
{
    name: 'iphone',
    price: 1000,
    currency: 'dollar',
    details: {
        model: 10,
        color: 'red'
    }
}
console.log(product)