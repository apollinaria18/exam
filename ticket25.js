/*Описать объекты в JavaScript.
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
Описать работу с сессиями в PHP.
Web-сессия – специальный ключ (идентификатор сессии), хранящийся клиентской программой и сопоставляемый с пользовательскими данными на стороне сервера.
Сессии предназначены для хранения и передачи данных отдельного пользователя между динамическими страницами одного ресурса. Это удобно для авторизации, корзин покупок и сохранения настроек пользователя.
Механизм работы сессий
	Ключ считывается с сервера либо из строки URL, либо из Cookie
	На этапе проверки ключа проверяется, существуют ли данные на сервере, сопоставляемые с этим ключом.
	Ключ генерируются таким образом, чтобы исключить возможность его подмены.
Основные моменты работы с сессиями
•	Создание и запуск сессии
Используется функция session_start().
Она должна вызываться перед выводом любого контента на страницу.
•	Сохранение данных в сессию
Через суперглобальный массив $_SESSION:
$_SESSION["имя_ключа"] = значение;
•	Чтение данных из сессии
Доступ также через $_SESSION:
echo $_SESSION["имя_ключа"];
•	Удаление данных сессии
Удаление конкретного значения: unset($_SESSION["имя_ключа"]);
Уничтожение всей сессии: session_destroy();
*/
class Product {
    #name;
    #price;
    #quantity;

    constructor() {
        this.#name = "";
        this.#price = 0;
        this.#quantity = 0;
    }

    setData(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        this.#quantity = quantity;
    }

    showData() {
        console.log("Наименование:", this.#name);
        console.log("Цена:", this.#price);
        console.log("Количество:", this.#quantity);
    }
}

class Product1 extends Product {
    #year;

    constructor(name = "", price = 0, quantity = 0, year = 0) {
        super();
        this.setData(name, price, quantity);
        this.#year = year;
    }

    inputData() {
        let name = prompt("Введите наименование:");
        let price = Number(prompt("Введите цену:"));
        let quantity = Number(prompt("Введите количество:"));
        let year = Number(prompt("Введите год выпуска:"));

        this.setData(name, price, quantity);
        this.#year = year;
    }

    showData() {
        super.showData();
        console.log("Год выпуска:", this.#year);
    }
}

let product = new Product1();
product.inputData();
product.showData();
