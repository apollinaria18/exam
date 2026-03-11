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
. Определить promises и fech в JavaScript.
Promise – это обещание получить результат в будущем.
Ты заказал пиццу
Сейчас её нет.
Но есть обещание, что:
•	либо привезут (успех)
•	либо не привезут (ошибка)
Когда он получает результат, он должен вызвать один из результатов:
•	resolve(value) –успешно, с результатом value.
•	reject(error) – ошибка, error – объект ошибки.
Состояния промиса
Promise может быть в 3 состояниях:
1.	pending – ожидание
2.	fulfilled – выполнен
3.	 rejected – ошибка
После выполнения состояние меняется навсегда.
Fetch() – встроенная функция для выполнения HTTP-запросов. 
Как работает: Возвращает промис, который выполняется с объектом Response, содержащим ответ сервера.
Особенности: Промис fetch не переходит в состояние rejected при ошибках HTTP-протокола, он считается выполненным.*/
class Building {
    #number;
    #floors;
    #year;

    constructor() {
        this.#number = "";
        this.#floors = 0;
        this.#year = 0;
    }

    setData(number, floors, year) {
        this.#number = number;
        this.#floors = floors;
        this.#year = year;
    }

    showData() {
        console.log("Номер дома:", this.#number);
        console.log("Количество этажей:", this.#floors);
        console.log("Год постройки:", this.#year);
    }
}

class House extends Building {
    #apartments;

    constructor(number = "", floors = 0, year = 0, apartments = 0) {
        super();
        this.setData(number, floors, year);
        this.#apartments = apartments;
    }

    inputData() {
        let number = prompt("Введите номер дома:");
        let floors = Number(prompt("Введите количество этажей:"));
        let year = Number(prompt("Введите год постройки:"));
        let apartments = Number(prompt("Введите количество квартир:"));

        this.setData(number, floors, year);
        this.#apartments = apartments;
    }

    showData() {
        super.showData();
        console.log("Количество квартир:", this.#apartments);
    }
}

let house = new House();
house.inputData();
house.showData();
