/*Определить функции и методы функций JavaScript.
Функции – это блоки кода, выполняющие определенные задачи, определяемые через function (declaration), функциональные выражения (expression) или стрелочные функции (=>).
Синтаксис: function имя функции ((список аргументов, разделенных запятыми))
{ ... тело функции;
[return (переменная или выражение};]  }
•	Function Declaration
function sum(a, b) {
return a + b;
}
•	Function Expression
const sum = function(a, b) {
return a + b;
};
Разница expression и declaration в том, что есть мы создали функцию и можем использовать ее в любом месте программы, даже до ее глобального объявления:
sum(2, 3);
function sum(a, b) { return a + b; }
С экспрешен так не прокатит.
Expression нужен для того, чтобы динамически определять функции и передавать их в качестве параметров в declaration:
function run(fn) {  fn();  }
run(function() {  console.log("Hello"); });
•	Стрелочные функции ¬– т.е. это тот же expression просто синтаксис более облегченный.
const sum = (a, b) => a + b;
Разные формы стрелочных:
o	Один параметр:
const square = x => x * x;
o	Без параметров:
const hello = () => console.log("Hi");
o	С телом функции:
const sum = (a, b) => {
const result = a + b;
return result;
};
•	Функция без имени – часто используется как аргумент.
setTimeout(function() {
  console.log("Hi");
}, 1000);
Основные методы функций — это call, apply и bind.
•	Метод call() – вызывает функцию немедленно, позволяя вручную передать объект, который станет this внутри этой функции. (Чтобы «одолжить» метод у одного объекта для другого)
Синтаксис: func.call(context, arg1, arg2, ...)
•	Метод apply() – работает точно так же, как call, но принимает аргументы не по отдельности, а в виде массива. (Удобно, когда данные уже лежат в массиве или их количество заранее неизвестно)
Синтаксис: func.apply(context, [arg1, arg2])
•	Метод bind() – в отличие от предыдущих, он не вызывает функцию сразу. Он создает и возвращает копию функции с жестко привязанным контекстом. (Чтобы зафиксировать this, чтобы он не «потерялся» при передаче функции.)
Синтаксис: let newFunc = func.bind(context)
. Описать процесс обработки ошибок в PHP.
Обработка ошибок в PHP – позволяет перехватывать ошибки во время выполнения программы и предотвращать аварийное завершение скрипта. 
В PHP есть несколько способов обработки ошибок: 
	встроенные функции, 
o	error_reporting() — устанавливает, какие ошибки отображать
o	set_error_handler() — задаёт пользовательскую функцию для обработки ошибок
	конструкция try…catch 
Позволяет перехватывать исключения, генерируемые кодом или функциями.
	Оператор throw
Используется для генерации собственного исключения
*/
class Transport {
    #brand;
    #passengers;
    #power;
    #speed;

    constructor() {
        this.#brand = "";
        this.#passengers = 0;
        this.#power = 0;
        this.#speed = 0;
    }

    setData(brand, passengers, power, speed) {
        this.#brand = brand;
        this.#passengers = passengers;
        this.#power = power;
        this.#speed = speed;
    }

    showData() {
        console.log("Марка:", this.#brand);
        console.log("Вместительность пассажиров:", this.#passengers);
        console.log("Мощность:", this.#power);
        console.log("Скорость:", this.#speed);
    }
}

class Train extends Transport {
    #cars;

    constructor(brand = "", passengers = 0, power = 0, speed = 0, cars = 0) {
        super();
        this.setData(brand, passengers, power, speed);
        this.#cars = cars;
    }

    inputData() {
        let brand = prompt("Введите марку:");
        let passengers = Number(prompt("Введите вместительность пассажиров:"));
        let power = Number(prompt("Введите мощность:"));
        let speed = Number(prompt("Введите скорость:"));
        let cars = Number(prompt("Введите количество вагонов:"));

        this.setData(brand, passengers, power, speed);
        this.#cars = cars;
    }

    showData() {
        super.showData();
        console.log("Количество вагонов:", this.#cars);
    }
}

let train = new Train();
train.inputData();
train.showData();
