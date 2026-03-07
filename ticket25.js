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
