class Phone {
    #brand;
    #price;

    constructor() {
        this.#brand = "";
        this.#price = 0;
    }

    setData(brand, price) {
        this.#brand = brand;
        this.#price = price;
    }

    showData() {
        console.log("Марка:", this.#brand);
        console.log("Цена:", this.#price);
    }
}

class Mobile extends Phone {
    #memory;
    #simCount;

    constructor(brand = "", price = 0, memory = 0, simCount = 1) {
        super();
        this.setData(brand, price);
        this.#memory = memory;
        this.#simCount = simCount;
    }

    inputData() {
        let brand = prompt("Введите марку:");
        let price = Number(prompt("Введите цену:"));
        let memory = Number(prompt("Введите объем памяти:"));
        let sim = Number(prompt("Введите количество сим-карт:"));

        this.setData(brand, price);
        this.#memory = memory;
        this.#simCount = sim;
    }

    showData() {
        super.showData();
        console.log("Объем памяти:", this.#memory);
        console.log("Количество сим-карт:", this.#simCount);
    }
}

let phone = new Mobile();
phone.inputData();
phone.showData();
