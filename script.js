'use strict';

let num = 50;
if (num < 49) {
    console.log("неверно")
} else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
}
(num == 50) ? console.log("Верно!") : console.log("Неверно!");

switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Все еще много");
        break;
    case num > 80:
        console.log("Верно");
        break;    
    default:
        console.log("что то не то");
        break;
}
let num1 = 50;

do {
    console.log(num1);
    num1++;
}
while (num1 < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
    
    }
    console.log(i); 
}