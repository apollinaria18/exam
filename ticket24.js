/*Описать принцип работы функций временной задержки JavaScript.
Функции временной задержки (setTimeout, setInterval) – планируют выполнение кода через указанное время (в мс), не блокируя основной поток.
Для «планирования вызова» существуют два метода:
•	setTimeout – позволяет вызвать функцию один раз через определённый интервал времени. setTimeout (sayHi, 1000, "Привет", "Джон"); // Привет, Джон
•	setInterval – позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени. let timId = setInterval(() => alert('tick'), 2000);
•	clearTimeout(id) / clearInterval(id) – останавливают выполнение запланированного кода, используя идентификатор (id), который возвращают setTimeout и setInterval при создании.
В JS всего один поток. Он не может делать два дела одновременно. Чтобы страница не зависала, пока мы ждем ответа от сервера или таймера, используется Event Loop.
Event Loop — это механизм, который позволяет JS быть «многозадачным», откладывая функции в очередь и выполняя их только тогда, когда основной поток свободен.
Принцип работы таймеров тесно связан с циклом событий (Event Loop):
1	Планирование: Когда вы вызываете setTimeout, таймер передается в среду окружения. Основной поток JS продолжает выполнять следующий код, не дожидаясь окончания задержки.
2	Очередь: По истечении времени колбэк-функция попадает в очередь задач.
3	Выполнение: Функция из очереди попадет в основной стек выполнения только тогда, когда он полностью освободится от текущих синхронных задач.
Описать работу с cookie в PHP, создание и использование.
Cookie (куки) – небольшая порция текстовых данных, отправляемая веб-сервером и хранящаяся в браузере клиента.
Куки используются для:
•	аутентификации пользователя;
•	хранения персональных предпочтений и настроек пользователя;
•	отслеживания состояния сеанса доступа пользователя;
•	ведения статистики о пользователях.
Основные моменты работы с cookie в PHP
1.	Создание cookie
Для создания используется функция setcookie().
Синтаксис: setcookie(name, value, expire, path, domain, secure, httponly);
o	expire – время жизни в формате UNIX timestamp
o	path – путь на сервере, где доступна cookie
o	domain – домен
o	secure – передавать только через HTTPS
o	httponly – доступна только для HTTP (не через JS)
2.	Чтение cookie
Через суперглобальный массив $_COOKIE:
echo $_COOKIE["name"];
3.	Удаление cookie
Устанавливаем время жизни в прошлое:
setcookie("name", "", time() - 3600);
*/
class Biblio {
    #regNumber;
    #author;
    #title;
    #pages;

    constructor() {
        this.#regNumber = "";
        this.#author = "";
        this.#title = "";
        this.#pages = 0;
    }

    setData(regNumber, author, title, pages) {
        this.#regNumber = regNumber;
        this.#author = author;
        this.#title = title;
        this.#pages = pages;
    }

    showData() {
        console.log("Регистрационный номер:", this.#regNumber);
        console.log("Автор:", this.#author);
        console.log("Название книги:", this.#title);
        console.log("Количество страниц:", this.#pages);
    }
}

class DateBook extends Biblio {
    #issueDate;

    constructor(regNumber = "", author = "", title = "", pages = 0, issueDate = [0, 0, 0]) {
        super();
        this.setData(regNumber, author, title, pages);
        this.#issueDate = issueDate;
    }

    inputData() {
        let regNumber = prompt("Введите регистрационный номер:");
        let author = prompt("Введите автора:");
        let title = prompt("Введите название книги:");
        let pages = Number(prompt("Введите количество страниц:"));
        let day = Number(prompt("Введите день выдачи:"));
        let month = Number(prompt("Введите месяц выдачи:"));
        let year = Number(prompt("Введите год выдачи:"));

        this.setData(regNumber, author, title, pages);
        this.#issueDate = [day, month, year];
    }

    showData() {
        super.showData();
        console.log("Дата выдачи книги:", this.#issueDate.join("."));
    }
}

let book = new DateBook();
book.inputData();
book.showData();
