/*Дать определение псевдо-элементам CSS. Привести примеры.
Псевдоэлементы — это классы, позволяющие задать стиль части элемента (нп, для первой буквы или строки абзаца), а также генерировать содержимое, которого нет в HTML-коде документа.
Используются для добавления содержимого, которое генерируется с помощью свойства content:
	::first-letter — выбирает первую букву каждого абзаца, применяется только к блочным элементам;
	::first-line — выбирает первую строку текста элемента, применяется только к блочным элементам;
	::before — вставляет генерируемое содержимое перед элементом;
	::after — добавляет генерируемое содержимое после элемента.
Пример:
<html>
<head>
<style type='text/css'>
body::after { content:url(../1/image/5-1.png); }
body::before { content: "\266B";
font-size: 50px;
color: green; }
p::first-letter { font: 30px Monotype Corsiva;
color: magenta; }
p { margin-top: -12px;
text-align: right; }
</style>
</head>
<body>
<q>Учитесь у всех, не подражайте никому.</q>
<p>М. Горький</p>
<hr>
</body>
</html>
2. Описать обращение к элементам формы из JavaScript.
Обращение к элементам формы – специальные свойства и методы для быстрого доступа к <form>, <input>, <select> и другим элементам форм.
Основные способы доступа:
1.	По имени формы и имени элемента
document.forms["имя_формы"]["имя_элемента"]
2.	По индексу формы и индексу элемента
document.forms[0].elements[0].value
3.	Через id элемента
document.getElementById("elementId").value
4.	Через коллекцию элементов формы
var form = document.forms["myForm"];
var inputField = form.elements["username"]; */
class Human {
    #surname;
    #height;
    #weight;
    #birthDate;

    constructor() {
        this.#surname = "";
        this.#height = 0;
        this.#weight = 0;
        this.#birthDate = [0, 0, 0];
    }

    setData(surname, height, weight, birthDate) {
        this.#surname = surname;
        this.#height = height;
        this.#weight = weight;
        this.#birthDate = birthDate;
    }

    showData() {
        console.log("Фамилия и имя:", this.#surname);
        console.log("Рост:", this.#height);
        console.log("Вес:", this.#weight);
        console.log("Дата рождения:", this.#birthDate.join("."));
    }
}

class Director extends Human {
    #score;

    constructor(surname = "", height = 0, weight = 0, birthDate = [0, 0, 0], score = 0) {
        super();
        this.setData(surname, height, weight, birthDate);
        this.#score = score;
    }

    inputData() {
        let surname = prompt("Введите фамилию и имя:");
        let height = Number(prompt("Введите рост:"));
        let weight = Number(prompt("Введите вес:"));
        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));
        let score = Number(prompt("Оценка (в баллах):"));

        this.setData(surname, height, weight, [day, month, year]);
        this.#score = score;
    }

    showData() {
        super.showData();
        console.log("Оценка сотрудников:", this.#score);
    }
}

let director = new Director();
director.inputData();
director.showData();
