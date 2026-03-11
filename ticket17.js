/*. Описать Grid модель.
Grid модель – новая модель шаблона, оптимизированная для  двумерных шаблонов (по строкам и по столбцам одновременно). 
Главная идея: заключается в разделении веб-страницы на столбцы и строки. В образовавшиеся сетке можно помещать элементы, а управлять их размерами и расположением с помощью специальных свойств модуля.
Основные понятия:
	Сетка (grid) — это набор пересекающихся горизонтальных и вертикальных линий, делящих grid-контейнера на сетки, в которые могут быть помещены элементы.
	Grid-контейнер – родительский контейнер, в котором  определяется отображение сетки.
	Элементы сетки – прямые дети (потомки) сетчатого  контейнера.
Создание Grid-контейнера
	Для того чтобы начать работу, нам нужно определить элемент-контейнер с помощью display: grid,
	Настроить размеры колонок и строк с помощью grid-template-columns и grid-template- rows, (%, px, fr, em, vh)
	Разместить его дочерние элементы внутри сетки с помощью grid-column и grid-row.
Синтаксис:
.container { display: grid;
grid-template-rows: <длина-дорожки> <длина-дорожки> ... ;
grid-template-columns: <длина-дорожки> <длина-дорожки> ... ;  }
Свойства для родительского элемента (контейнера сетки)
	display
Определяет элемент как контейнер и устанавливает новый контекст  форматирования сетки для его содержимого.
Значения:
o	grid - формирует сетку как блок;
o	inline-grid - формирует сетку, которая подстраивается под содержимое и занимает только необходимую ширину;
o	subgrid - если контейнер это ещё и элемент (вложенная сетка), то можно использовать это свойство для обозначения того, чтобы размеры строк/колонок были взяты из родительского элемента, а не  определяли собственный
	grid-template-columns  / grid-template-rows
Определяет колонки и строки сетки с помощью списка значений  разделённого пробелами (количество, ширину столбцов и высоту строк).
Значения:
o	<track-size> - может быть фиксированным размером, процентами или частью свободного пространства в сетке  (определяется с помощью единицы 1fr (fraction) = 25%);
o	<line-name> - произвольное имя на ваш выбор;
Элементы можно размещать и переупорядочивать независимо от их порядка в HTML.
Свойства: grid-row-start,  grid-row-end,  grid-column-start  grid-column-end
и их краткая запись 
	grid-row: <row-start> / <row-end>, 
	grid-column: <column-start> / <column-end>, 
	grid-area: <row-start> / <column-start> / <row-end> / <column-end>; где:
. - точка обозначающая пустую ячейку;
none - области не определены.
Описать обработку ошибок в JavaScript.
1.	Конструкция try..catch..finally.
В блок try помещают код, где возможна ошибка. Если она возникает, выполнение try прерывается и управление переходит в catch с объектом ошибки. finally выполняется всегда, например, для очистки ресурсов.
2.	Оператор throw – используется для генерации собственного исключения.
Можно передавать строку или объект Error.
Синтаксис: throw <объект ошибки>
3.	Promise – это обещание получить результат в будущем – объект, который представляет результат асинхронной операции. 
Используются методы .catch() или конструкции try...catch внутри async/await. Он может быть:
•	pending – ожидание
•	fulfilled – выполнен
•	rejected – ошибка */
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

class Reader extends Human {
    #ticketNumber;

    constructor(surname = "", height = 0, weight = 0, birthDate = [0, 0, 0], ticketNumber = "") {
        super();
        this.setData(surname, height, weight, birthDate);
        this.#ticketNumber = ticketNumber;
    }

    inputData() {
        let surname = prompt("Введите фамилию и имя:");
        let height = Number(prompt("Введите рост:"));
        let weight = Number(prompt("Введите вес:"));
        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));
        let ticket = prompt("Введите номер читательского билета:");

        this.setData(surname, height, weight, [day, month, year]);
        this.#ticketNumber = ticket;
    }

    showData() {
        super.showData();
        console.log("Номер читательского билета:", this.#ticketNumber);
    }
}

let reader = new Reader();
reader.inputData();
reader.showData();
