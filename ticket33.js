/*Описать форматирование текста, изменение шрифта, заголовки, списки в HTML.
Форматирование текста в HTML выполняется с помощью специальных тегов, которые изменяют внешний вид и смысл текста.
ТЕГИ, ДЕЛАЮЩИЕ ТЕКСТ ЗАГОЛОВКАМИ
<h1></h1>
 <h2></h2>
 <h3></h3>
 <h4></h4>
 <h5></h5>
 <h6></h6>
Эти теги выделяют текст в виде заголовков. Т.е. каждый заголовок начинается с новой строки, выделен полужирным шрифтом и имеет свой размер.
 Эти теги могут использоваться с параметром горизонтального выравнивания align. Возможные значения этого параметра:
 left - слева,
 right - справа,
 center - по центру,
 jastify - по ширине.
ТЕГИ РАЗДЕЛЕНИЯ НА АБЗАЦЫ И ПЕРЕНОСА СТРОКИ
Тег <br> - тег принудительного перевода строки, после этого тега начинается с новой строки.
 Теги <p></p> разделяют текст на абзацы. Перед началом каждого абзаца следует поместить тег <p>, закрывающий тег не обязателен.
 У тега <p> есть параметр align, который задает способ выравнивания текста внутри параграфа. Возможные значения этого параметра: left, right,  center, jastify.
ТЕГИ, ВЫДЕЛЯЮЩИЕ ТЕКСТ КУРСИВОМ
<cite></cite>
 <dfn></dfn>
 <em></em>
 <i></i>
Эти теги выделяют текст курсивом, но делают они это по разным причинам.
•        Теги <cite></cite> используются для логического выделения названий книг, статей и цитат.
•        Теги <dfn></dfn> используются для выделения определений.
•        Тегами <em></em> и <i></i> выделяют важные фрагменты текста.
ТЕГИ, ВЫДЕЛЯЮЩИЕ ТЕКСТ ПОЛУЖИРНЫМ ШРИФТОМ
<strong></strong> - рекомендуется
 <b></b>
ТЕГИ, ВЫДЕЛЯЮЩИЕ ТЕКСТ ПОДЧЕРКИВАНИЕМ
<ins></ins> - рекомендуется
 <u></u>
СПИСКИ
HTML использует три вида списков:
–       упорядоченные (нумерованные)
•        <OL> и </OL>
–        неупорядоченные (маркированные)
•        <UL> и </UL>
–       элементы списков заключаются между тэгами
•        <LI> и </LI>
–       списки определений
•         <DL> и </DL>
•        определяемые термины помечаются тэгом <DT>
•         определения – тэгом <DD>
2. Описать объекты в JavaScript. (23)
Объект – это структура данных, которая описывает сущность через свойства (характеристики) и методы (действия) и представляющие собой коллекции пар «ключ-значение» (свойства), где ключ - строка или символ, а значение - любой тип данных. Почти всё в JS – объекты.
Создание объектов:
	Литерал объекта (самый распространённый): 
let car = { brand: "Toyota", year: 2020 };
	Через конструктор Object():
let car = new Object();
car.brand = "Toyota";
car.year = 2020;
	Через функции-конструкторы:
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person("Иван", 30);
Свойства — данные объекта (например, person.name).
Методы — функции, привязанные к объекту (например, person.greet()).
Доступ к свойствам:
console.log(person.name);    // через точку
console.log(person["age"]);  // через скобки
Особенности объектов:
•	Объекты могут содержать другие объекты, массивы и функции.
•	Можно динамически добавлять и удалять свойства:
person.height = 180; // добавление
delete person.age;   // удаление
Пример:
< html>
<head>
<body>
    <script>
        let person = {
            name: "Иван",
            age: 30,
            greet() { console.log("Привет, меня зовут " + this.name); }
        };
        console.log(person.name); // доступ к свойству
        person.greet();           // вызов метода
        person.height = 180;  // добавление
        console.log(person.height);
        delete person.age;    // удаление
        console.log(person.age); // undefined
    </script>
</body>
</html>
*/
class User {
    #name;
    #birthDate;

    constructor() {
        this.#name = "";
        this.#birthDate = [0, 0, 0];
    }

    setData(name, birthDate) {
        this.#name = name;
        this.#birthDate = birthDate;
    }

    showData() {
        console.log("Фамилия и имя:", this.#name);
        console.log("Дата рождения:", this.#birthDate.join("."));
    }
}

class Contacts extends User {
    #email;
    #phone;

    constructor(name = "", birthDate = [0, 0, 0], email = "", phone = "") {
        super();
        this.setData(name, birthDate);
        this.#email = email;
        this.#phone = phone;
    }

    inputData() {
        let name = prompt("Введите фамилию и имя:");
        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));
        let email = prompt("Введите email:");
        let phone = prompt("Введите телефон:");

        this.setData(name, [day, month, year]);
        this.#email = email;
        this.#phone = phone;
    }

    showData() {
        super.showData();
        console.log("Email:", this.#email);
        console.log("Телефон:", this.#phone);
    }
}

let contact = new Contacts();
contact.inputData();
contact.showData();
