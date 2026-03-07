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
