/*Описать Flex модель. 
Flexbox – это модель компоновки элементов, предназначенная для автоматического распределения пространства между элементами, меняя их размеры и позиции.
Главная задумка flex-вёрстки:
	изменять ширину и высоту элементов – для адаптивности;
	растягивать элементы для заполнения свободного пространства;
	сжимать элементы, чтобы предотвратить выход за границы контейнера.
Для инициализации контейнера:
.flex-container {
display: flex; /* контейнер - блочный элемент */ /*}
или
.flex-container {
display: inline-flex; /* контейнер - строчный элемент */ /*}
Свойство применяется к родительскому элементу и создаёт flex-контейнер.
В модели используются две оси:
•	Главная ось (main axis) — вдоль (по сторонам) неё располагаются элементы.
•	Поперечная ось (cross axis) — перпендикулярна главной.
Ключевые свойства контейнера (родителя):
	Направление главной оси можно задавать, используя свойство flex-direction – определяет направление элементов, расположенных в контейнере. 
o	row – слева направо, в строку (по умолчанию);
o	row-reverse – справа налево, в строку;
o	column –сверху вниз, в колонку;
o	column-reverse – снизу вверх, в колонку.
	Выравнивание элементов:
•	По главной оси: 
justify-content: flex-start (лево) | flex-end (право) | center | space-between (край-центр-край) | space-around (отст.край-центр-отст.край);
•	По поперечной оси:
align-items: flex-start (сверху) | flex-end (снизу) | center | baseline (по тексту внутри) | stretch (верх-низ);
Ключевые свойства элементов (дочерних блоков)
	flex-grow – определяет для flex-элемента возможность «вырастать» , если есть свободное место.
	flex-shrink– определяет для flex-элемента возможность «сжиматься» при необходимости.
	flex-basis – определяет размер по умолчанию для элемента перед распределением пространства в контейнере. 
	align-self – выравнивание отдельного элемента.
Описать объект event . Обработка событий в JavaScript.
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
•	Через addEventListener (рекомендуемый способ) – elem.addEventListener('click', func)
*/
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
        let score = Number(prompt("Оценка сотрудников (в баллах):"));

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
