/*Дать определение псевдо-классам CSS. Привести примеры.
Псевдоклассы — это селекторы, определяющие состояние уже существующих элементов в структуре документа, которое может меняться при определенных действиях пользователя. 
Они позволяют применить CSS-правила к элементам при совершении события или подчиняющимся определенному правилу.
Синтаксис: селектор:имя_псевдокласса {…}.
Основные типы псевдоклассов: 
1. Взаимодействие с пользователем (состояния):
	:link — не посещенная ссылка;
	:visited — посещенная ссылка;
	:hover — любой элемент, по которому проводят курсором мыши (a:hover { color: red; } /* Ссылка станет красной при наведении */ /*);
	:focus — интерактивный элемент, к которому перешли с помощью клавиатуры или активировали посредством мыши;
	:active — элемент, который был активизирован пользователем;
	:valid — поля формы, содержимое которых прошло проверку в браузере на соответствие указанному типу данных.
2. Структурные псевдоклассы – отбирают дочерние элементы в соответствии с параметром, указанным в круглых скобках:
	:nth-child(odd) — нечётные дочерние элементы;
	:nth-child(even) — чётные дочерние элементы ( tr:nth-child(even) { background: #eee; } /* Четные строки таблицы */ /*);
	:nth-child(n) – выбирает элемент по формуле или номеру.
o	:nth-child(3n) – каждый третий элемент среди дочерних;
o	:nth-child(3n+2) – выбирает каждый третий элемент, начиная со второго дочернего элемента (+2);
o	:nth-child(n+2) – выбирает все элементы, начиная со второго;
o	:nth-child(3) – выбирает третий дочерний элемент;
	:first-child – позволяет оформить только самый первый дочерний элемент (li:first-child { font-weight: bold; } /* Первый элемент списка жирный */ /*);
	:last-child — позволяет форматировать последний дочерний элемент;
	:only-child — выбирает элемент, являющийся единственным дочерним элементом;
	:empty — выбирает элементы, у которых нет дочерних элементов;
	:root — выбирает элемент, являющийся корневым в документе — элемент html.
Пример: 
<html>
<head>
<style type='text/css'>
a:visited { color: white;
background-color: aqua; }
a:hover { text-transform: uppercase; }
a:active { font-style: italic;
text-decoration: none; }
</style>
</head>
<body>
<a href="2_19.html"> псевдоклассы</a> &#160;
<a href="2_17.html">дочерний селектор</a>
</body>
</html>
2. Описать объект event. Обработка событий в JavaScript.
event – это объект, который автоматически передается обработчику события, когда оно происходит. 
Он содержит информацию о событии и позволяет взаимодействовать с ним.
Основные свойства:
	type – тип события (например, 'click', 'keydown')
	target – лемент, на котором произошло событие
	currentTarget – лемент, на котором в данный момент обрабатывается событие
	key – нажатая клавиша
Обработка событий:
•	Через HTML-атрибут – onclick="func()"
•	Через DOM-свойство – elem.onclick = func() { ... }
•	Через addEventListener (рекомендуемый способ) – elem.addEventListener('click', func) */
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
        console.log("Вместительность:", this.#passengers);
        console.log("Мощность:", this.#power);
        console.log("Скорость:", this.#speed);
    }
}

class Ship extends Transport {
    #length;
    #displacement;

    constructor(brand = "", passengers = 0, power = 0, speed = 0, length = 0, displacement = 0) {
        super();
        this.setData(brand, passengers, power, speed);
        this.#length = length;
        this.#displacement = displacement;
    }

    inputData() {
        let brand = prompt("Введите марку:");
        let passengers = Number(prompt("Введите вместительность пассажиров:"));
        let power = Number(prompt("Введите мощность:"));
        let speed = Number(prompt("Введите скорость:"));
        let length = Number(prompt("Введите длину:"));
        let displacement = Number(prompt("Введите водоизмещение:"));

        this.setData(brand, passengers, power, speed);
        this.#length = length;
        this.#displacement = displacement;
    }

    showData() {
        super.showData();
        console.log("Длина:", this.#length);
        console.log("Водоизмещение:", this.#displacement);
    }
}

let ship = new Ship();
ship.inputData();
ship.showData();
