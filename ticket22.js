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

class Train extends Transport {
    #cars;

    constructor(brand = "", passengers = 0, power = 0, speed = 0, cars = 0) {
        super();
        this.setData(brand, passengers, power, speed);
        this.#cars = cars;
    }

    inputData() {
        let brand = prompt("Введите марку:");
        let passengers = Number(prompt("Введите вместительность пассажиров:"));
        let power = Number(prompt("Введите мощность:"));
        let speed = Number(prompt("Введите скорость:"));
        let cars = Number(prompt("Введите количество вагонов:"));

        this.setData(brand, passengers, power, speed);
        this.#cars = cars;
    }

    showData() {
        super.showData();
        console.log("Количество вагонов:", this.#cars);
    }
}

let train = new Train();
train.inputData();
train.showData();
