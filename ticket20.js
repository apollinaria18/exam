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
