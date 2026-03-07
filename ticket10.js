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
        console.log("Вместительность:", this.#passengers);
        console.log("Мощность:", this.#power);
        console.log("Скорость:", this.#speed);
    }
}

class Ship extends Transport {
    #length;
    #displacement;

    constructor(brand = "", passengers = 0, power = 0, speed = 0, length = 0, displacement = 0) {
        super();
        this.setData(brand, passengers, power, speed);
        this.#length = length;
        this.#displacement = displacement;
    }

    inputData() {
        let brand = prompt("Введите марку:");
        let passengers = Number(prompt("Введите вместительность пассажиров:"));
        let power = Number(prompt("Введите мощность:"));
        let speed = Number(prompt("Введите скорость:"));
        let length = Number(prompt("Введите длину:"));
        let displacement = Number(prompt("Введите водоизмещение:"));

        this.setData(brand, passengers, power, speed);
        this.#length = length;
        this.#displacement = displacement;
    }

    showData() {
        super.showData();
        console.log("Длина:", this.#length);
        console.log("Водоизмещение:", this.#displacement);
    }
}

let ship = new Ship();
ship.inputData();
ship.showData();
