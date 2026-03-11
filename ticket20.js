/*Описать обработку событий средствами DHTML. Описать DHTML.
DHTML – это набор средств, позволяющих создавать интерактивные веб-документы без перезагрузки страницы и без обращения к серверу.
Можно изменять внешний вид и содержимое страницы динамически – в ответ на действия пользователя.
DHTML включает в себя:
	HTML и CSS;
	JavaScript – логика и обработка событий;
	DOM – объектная модель документа, которая обеспечивает: 
o	доступ к элементам страницы;
o	изменение их атрибутов и стилей;
o	управление содержимым документа.
Обработка событий – это реагирование страницы на действия пользователя или браузера.
События обрабатываются с помощью JavaScript.
События мыши:
	onClick – клик левой кнопкой мыши.
	onContextMenu – клик правой кнопкой мыши.
	onMouseOver / onMouseOut – курсор наведен / покидает элемент.
	onMouseDown / onMouseUp – когда нажали / отпустили кнопку мыши.
	onMouseMove – перемещение мыши.
Клавиатурные события:
	onKeyDown и onKeyUp – клавиша нажата / отпущена.
	onKeyPress — нажата и отпущена клавиша.
Особенности обработки событий
	Все события имеют приставку on;
	События могут назначаться элементам HTML;
	Регистрация обработчика не чувствительна к регистру;
	Может состоять из нескольких слов (on + Select + Start).
Описать работу со строками в PHP.
Работа со строками в PHP включает создание, изменение, конкатенацию, поиск и форматирование строк.
Основные операции со строками 
	Создание строки
$str1 = "Привет, мир!"; // есть интерполяция
$str2 = 'Добро пожаловать!';
	Конкатенация (объединение строк)
$name = "Иван";
$greeting = "Привет, " . $name . "!";
	Доступ к отдельным символам строки
$char = $str1[0]; // 'П'
	Длина строки
$len = strlen($str1); // количество символов
	Поиск подстроки
$pos = strpos($str1, "мир"); // возвращает позицию подстроки
	Извлечение подстроки
$sub = substr($str1, 7, 3); // "мир"
	Изменение регистра
$upper = strtoupper($str1); // "ПРИВЕТ, МИР!"
$lower = strtolower($str1); // "привет, мир!"
	Удаление пробелов
$trimmed = trim("  текст  "); // "текст" */
class Car {
    #owner;
    #brand;
    #number;

    constructor() {
        this.#owner = "";
        this.#brand = "";
        this.#number = "";
    }

    setData(owner, brand, number) {
        this.#owner = owner;
        this.#brand = brand;
        this.#number = number;
    }

    showData() {
        console.log("Владелец:", this.#owner);
        console.log("Марка:", this.#brand);
        console.log("Номер:", this.#number);
    }
}

class Caravan extends Car {
    #seats;

    constructor(owner = "", brand = "", number = "", seats = 0) {
        super();
        this.setData(owner, brand, number);
        this.#seats = seats;
    }

    inputData() {
        let owner = prompt("Введите владельца:");
        let brand = prompt("Введите марку:");
        let number = prompt("Введите номер:");
        let seats = Number(prompt("Введите количество пассажирских мест:"));

        this.setData(owner, brand, number);
        this.#seats = seats;
    }

    showData() {
        super.showData();
        console.log("Количество пассажирских мест:", this.#seats);
    }
}

let caravan = new Caravan();
caravan.inputData();
caravan.showData();
