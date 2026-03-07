class Transport {
    #brand;
    #passengers;
    #power;
    #speed;

    constructor() {
        this.#brand = "";
        this.#passengers = 0;
        this.#power = 0;
        this.#speed = 0;
    }

    setData(brand, passengers, power, speed) {
        this.#brand = brand;
        this.#passengers = passengers;
        this.#power = power;
        this.#speed = speed;
    }

    showData() {
        console.log("Марка:", this.#brand);
        console.log("Вместительность пассажиров:", this.#passengers);
        console.log("Мощность:", this.#power);
        console.log("Скорость:", this.#speed);
    }
}

class Airplane extends Transport {
    #engines;
    #height;

    constructor(brand = "", passengers = 0, power = 0, speed = 0, engines = 0, height = 0) {
        super();
        this.setData(brand, passengers, power, speed);
        this.#engines = engines;
        this.#height = height;
    }

    inputData() {
        let brand = prompt("Введите марку:");
        let passengers = Number(prompt("Введите вместительность пассажиров:"));
        let power = Number(prompt("Введите мощность:"));
        let speed = Number(prompt("Введите скорость:"));
        let engines = Number(prompt("Введите количество двигателей:"));
        let height = Number(prompt("Введите высоту полета:"));

        this.setData(brand, passengers, power, speed);
        this.#engines = engines;
        this.#height = height;
    }

    showData() {
        super.showData();
        console.log("Количество двигателей:", this.#engines);
        console.log("Высота полета:", this.#height);
    }
}

let airplane = new Airplane();
airplane.inputData();
airplane.showData();
