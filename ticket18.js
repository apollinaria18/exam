/*Описать создание анимации в CSS (переходы, ключевые кадры) и визуальные эффекты.
Переходы:
•	Transition – это плавное изменение свойств элемента между двумя состояниями.
Основные свойства:
o	transition-property — какое свойство анимируется (all, width, opacity, color)
o	transition-duration — длительность (s, ms)
o	transition-timing-function — плавность
	linear — равномерная скорость
	ease — медленно в начале и конце (по умолчанию)
	ease-in — медленно в начале
	ease-out — медленно в конце
	ease-in-out — медленно в начале и в конце
o	transition-delay — задержка (s, ms).
Универсальная запись: transition: property duration timing-function delay;
Ключевые кадры: 
Для создания более сложной анимации используется правило @keyframes.
@keyframes имя {
0% { блок объявлений } ИЛИ from { блок объявлений }
25% { блок объявлений }
50% { блок объявлений }
75% { блок объявлений }
100% { блок объявлений } ИЛИ to { блок объявлений }
}
Свойство animation: 
Для применения анимации используются свойства:
o	animation-name — имя 
o	animation-duration — длительность
o	animation-delay — задержка
o	animation-timing-function — плавность
o	animation-iteration-count — кол-во повторов (число / infinite - бесконечно)
o	animation-direction — направление (normal, reverse, alternate)
o	animation-play-state — запуск или пауза (running / paused)
o	animation-fill-mode — поведение после окончания
	none – эффект только во время анимации
	forwards – сохраняет конечное состояние
	backwards – применяет начальный кадр во время задержки
	both – объединяет оба эффекта.
Все параметры воспроизведения анимации можно объединить в одном свойстве animation, перечислив их через пробел:
animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction … ;
Визуальные эффекты:
•	Перспектива – применяется при трансформациях элемента, определяет
 расстояние в пикселях от плоскости дочерних элементов до
 точки из которой пользователь как бы смотрит.
perspective: 1000;
perspective: 125px;
•	Прозрачность – opacity – определяет уровень прозрачности элемента веб-страницы.
opacity: 0.5; /* Полупрозрачность элемента */ 
/*•	Градиент – для создания плавных цветовых переходов.  
background-image: linear-gradient(red, blue);
•	Трансформация – позволяют преобразовывать элементы в двухмерном и трехмерном пространствах.
o	Поворот 
transform: rotate(45deg); (45 градусов)
o	Масштабирование
Значение масштаба задается относительно единицы: scale(2) - элемент будет увеличен в два раза, scale(0.5) - элемент уменьшается в два раза.
Можно задать направление: X - по горизонтали, Y - по вертикали, Z - глубина масштабирования.
transform: scaleX(2);     /* по горизонтали */
/*transform: scale(-1);     /* отражение */
/*	Перемещение
translate(x,y), translateX(x),translateY(y)
transform: translate(50px, 4em); (вправо - вниз)
o	Искажение
skew() искажает форму элемента
transform: skewX(50deg);
transform: skewY(-50deg);
o	Использование нескольких трансформаций
transform: scale(1.5) translateX(10px) skew(10deg) rotate(0.175rad);
Сначала элемент увеличивается в полтора раза (scale), потом перемещается на 10 пикселов влево (translateX) и наклоняется и поворачивается (skew и rotate).
Определить асинхронные функции, формат JSON.
Асинхронные функции и JSON связаны с работой с данными и ожиданием результатов, не блокируя основной поток выполнения кода.
Асинхронная функция – это функция, объявленная с ключевым словом async, которая требует времени, всегда возвращает промис и может использовать оператор await.
•	Определяется с помощью ключевого слова async.
•	Внутри функции можно использовать оператор await для ожидания завершения Promise.
•	Позволяет писать асинхронный код в стиле синхронного, что упрощает чтение и обработку ошибок через try…catch.
JSON – это стандартный текстовый формат для представления структурированных данных на основе синтаксиса объекта JavaScript. 
Формат JSON обычно применяется для передачи информации между сервером и клиентом (например, отправка данных с сервера в браузер). 
•	JSON не поддерживает пространства имен, комментарии и метаданные, которые могут быть использованы в XML.
•	JSON обладает быстрой обработкой данных благодаря методам преобразования объектов JavaScript в формат JSON и обратно.
Основные правила JSON:
•	Данные – это:
•	объект: { "key": "value" }
•	массив: [1, 2, 3]
•	примитив: число, строка, true, false, null
•	Имена полей и строки только в двойных кавычках: "name", "text".
•	Никаких комментариев, лишних запятых и выражений (функций, undefined, дат и т.п.).
Основные методы работы с JSON в JavaScript:
•	JSON.stringify(obj) – преобразует объект в строку JSON.
•	JSON.parse(jsonStr) – преобразует строку JSON обратно в объект. */
class Student {
    #fio;
    #average;
    #group;

    constructor() {
        this.#fio = "";
        this.#average = 0;
        this.#group = "";
    }

    setData(fio, average, group) {
        this.#fio = fio;
        this.#average = average;
        this.#group = group;
    }

    showData() {
        console.log("ФИО:", this.#fio);
        console.log("Средний балл:", this.#average);
        console.log("Группа:", this.#group);
    }
}

class Aspirant extends Student {
    #degree;

    constructor(fio = "", average = 0, group = "", degree = "") {
        super();
        this.setData(fio, average, group);
        this.#degree = degree;
    }

    inputData() {
        let fio = prompt("Введите ФИО:");
        let average = Number(prompt("Введите средний балл:"));
        let group = prompt("Введите группу:");
        let degree = prompt("Введите ученую степень:");

        this.setData(fio, average, group);
        this.#degree = degree;
    }

    showData() {
        super.showData();
        console.log("Ученая степень:", this.#degree);
    }
}

let aspirant = new Aspirant();
aspirant.inputData();
aspirant.showData();
