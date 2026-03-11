/*1. Описать синтаксис CSS.
Синтаксис CSS — это набор правил, определяющих внешний вид HTML-элементов.
Правило таблиц CSS состоит из двух частей: 
селектор {свойство1: значение; свойство2: значение}
1.	Селектор – любой тэг html, для которого определение задает каким образом необходимо его форматировать. 
2.	Определение – состоит из двух частей: 
	свойства
	значения
Пример
P { color: #0000FF }
P - это селектор. Он представляет собой имя тега <P>.
color - это свойство (атрибут) стиля. Он задает цвет текста.
#0000FF - это значение атрибута стиля color. Оно представляет код синего цвета, записанный в формате RGB
2. Описать работу с массивами элементов в JavaScript. Привести пример.
Массив Array – это упорядоченный набор значений, в котором каждый элемент имеет свой порядковый номер, относящийся к стандартному объекту Array.
Объявление массива:
let arr = new Array();
let arr = [];
Массивы могут хранить данные любого типа: числа, строки, объекты, функции и даже другие массивы.
Методы работы с массивами:
•	Pop()/push() – добавление/удаление конечного элемента
•	Shift()/unshift() – добавление/удаление начального элемента
•	isArray() – проверка на массив (true или false)
•	reverse() – переворачивает массив
•	slice() – копирование массива в новый
•	sort() – сортировка посимвольно по возрастанию
•	concat() – добавление новых параметров
•	join() – массив в строку с запятыми по умолчанию
•	map() – перебор эл-тов в новый массив
•	forEach() – полный перебор массива 
Пример: 
<html>
<head>
<body>
    <script>
        let arr = [3, 1, 5];
        arr.push(7);
        arr.pop();
        arr.unshift(0); 
        arr.shift(); 
        console.log(Array.isArray(arr)); // true
        arr.reverse();
        let copy = arr.slice(0, 2);
        arr.sort();
        let newArr = arr.concat([10, 20]);
        let str = arr.join("-");
        console.log(str);
        let doubled = arr.map(x => x * 2);
        console.log(doubled);
        arr.forEach(item => console.log(item));
    </script>
</body>
</html> */
class Human {
    #name;
    #height;
    #weight;
    #birthDate;

    constructor() {
        this.#name = "";
        this.#height = 0;
        this.#weight = 0;
        this.#birthDate = [0, 0, 0];
    }

    setData(name, height, weight, birthDate) {
        this.#name = name;
        this.#height = height;
        this.#weight = weight;
        this.#birthDate = birthDate;
    }

    showData() {
        console.log("Фамилия и имя:", this.#name);
        console.log("Рост:", this.#height);
        console.log("Вес:", this.#weight);
        console.log("Дата рождения:", this.#birthDate.join("."));
    }
}

class Sportsman extends Human {
    #awards;

    constructor(name = "", height = 0, weight = 0, birthDate = [0,0,0], awards = 0) {
        super();
        this.setData(name, height, weight, birthDate);
        this.#awards = awards;
    }

    inputData() {
        let name = prompt("Введите фамилию и имя:");
        let height = Number(prompt("Введите рост:"));
        let weight = Number(prompt("Введите вес:"));
        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));
        let awards = Number(prompt("Введите число наград:"));

        this.setData(name, height, weight, [day, month, year]);
        this.#awards = awards;
    }

    showData() {
        super.showData();
        console.log("Число наград:", this.#awards);
    }
}

let sportsman = new Sportsman();
sportsman.inputData();
sportsman.showData();
