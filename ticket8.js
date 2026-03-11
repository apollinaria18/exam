/*1. Описать способы подключения каскадных таблиц стилей, привести примеры.
Три основных способа подключения: 
•	Связывание (через файл .css), 
– позволяет использовать одну таблицу стилей для форматирования многих страниц html. Для этого таблица стилей хранится в отдельном файле с расширением CSS. Присоединяется к документам с помощью тэга <LINK>, задаваемого в разделе <HEAD>. 
Область действия: весь сайт.
Как подключить: Используйте тег <link> внутри секции <head>.
 
Пример (style.css):
body { background-color: #f0f0f0; }
h1 { color: navy; }


Пример (index.html):
<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
 
•	Внедрение (внутри тега <style> в <head>),
– позволяет задавать все правила таблицы стилей непосредственно в самом документе в стилевом блоке, ограниченном тэгами STYLE. Используется, когда нужно задать уникальные стили для конкретной страницы.
Область действия: одна страница.
Пример:
<head>
<style>
body { background-color: lightblue; }
p { color: darkred; }
</style>
</head>
•	Встраивание в теги документа (inline-стили через атрибут style в теге).
– позволяет изменить форматирование конкретных элементов страницы. Этот метод имеет наивысший приоритет, но его сложно поддерживать, поэтому он не рекомендуется.
Область действия: один элемент.
Пример: 
<h1 style="color: red;"> Заголовок 1. Отображается красным цветом </h1>
•	Импортирование - Директива @import позволяет подключать одни CSS-файлы внутрь других или использовать её внутри тега <style>. Пример: @import:url("mystyles.css").
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

class Airplane extends Transport {
    #engines;
    #height;

    constructor(brand = "", passengers = 0, power = 0, speed = 0, engines = 0, height = 0) {
        super();
        this.setData(brand, passengers, power, speed);
        this.#engines = engines;
        this.#height = height;
    }

    inputData() {
        let brand = prompt("Введите марку:");
        let passengers = Number(prompt("Введите вместительность пассажиров:"));
        let power = Number(prompt("Введите мощность:"));
        let speed = Number(prompt("Введите скорость:"));
        let engines = Number(prompt("Введите количество двигателей:"));
        let height = Number(prompt("Введите высоту полета:"));

        this.setData(brand, passengers, power, speed);
        this.#engines = engines;
        this.#height = height;
    }

    showData() {
        super.showData();
        console.log("Количество двигателей:", this.#engines);
        console.log("Высота полета:", this.#height);
    }
}

let airplane = new Airplane();
airplane.inputData();
airplane.showData();
