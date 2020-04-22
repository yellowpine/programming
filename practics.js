
console.log(leftBorderWidth);
var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;
console.log('string'*9);

let person = {
    name: "Igor",
    age: 31,
    job: false
};
console.log (person.name);

let inc = 10,
    dec = 10;

inc++;
dec--;

console.log(inc);
console.log(dec);

//домашка 1
let money = prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

alert(appData.budget / 30);