/*1. Определить назначение каскадных таблиц стилей (CSS).
Каскадные таблицы стилей — это язык, используемый для оформления внешнего вида документов HTML, отделяя структуру (контент) от визуального представления (дизайна).
Назначение каскадных таблиц стилей (CSS) — это формальное описание внешнего вида элементов веб-документа.
CSS предназначены для:
•	задания стилей оформления HTML-документов;
•	управления отображением элементов страницы (цвет, шрифт, размеры, отступы, границы и т.д.);
•	разделения логической структуры документа и его визуального представления;
•	обеспечения единообразного оформления документа на разных устройствах.
2. Описать процесс редактирование дерева элементов.
Редактирование дерева элементов DOM – это изменение структуры HTML-документа с помощью JavaScript.
DOM представляет документ в виде иерархического дерева узлов, и JavaScript позволяет добавлять, изменять, заменять и удалять элементы этого дерева.
Основные операции редактирования DOM
1.	Добавление элементов
Для добавления новых узлов используются методы:
	createElement() – создание элемента;
	appendChild() – добавление элемента в конец родительского узла;
	insertBefore() – вставка элемента перед другим узлом.
2.	Изменение элементов
Можно изменять содержимое и атрибуты элементов.
3.	Замена элементов
Для замены узла используется метод replaceChild().
4.	Удаление элементов
Удаление узлов выполняется методом removeChild().*/
class Gadget {
    #power;
    #isOn;

    constructor() {
        this.#power = 0;
        this.#isOn = false;
    }

    setData(power, isOn) {
        this.#power = power;
        this.#isOn = isOn;
    }

    showData() {
        console.log("Мощность:", this.#power);
        console.log("Состояние включения:", this.#isOn);
    }
}

class Television extends Gadget {
    #producer;
    #screenSize;

    constructor(power = 0, isOn = false, producer = "", screenSize = 0) {
        super();
        this.setData(power, isOn);
        this.#producer = producer;
        this.#screenSize = screenSize;
    }

    inputData() {
        let power = Number(prompt("Введите мощность:"));
        let state = prompt("Включен? (true/false)") === "true";
        let producer = prompt("Введите производителя:");
        let screen = Number(prompt("Введите диагональ экрана:"));

        this.setData(power, state);
        this.#producer = producer;
        this.#screenSize = screen;
    }

    showData() {
        super.showData();
        console.log("Производитель:", this.#producer);
        console.log("Диагональ экрана:", this.#screenSize);
    }
}

let tv = new Television();
tv.inputData();
tv.showData();
