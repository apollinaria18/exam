class Transport {
    #brand;
    #passengers;
    #power;

    constructor() {
        this.#brand = "";
        this.#passengers = 0;
        this.#power = 0;
    }

    setData(brand, passengers, power) {
        this.#brand = brand;
        this.#passengers = passengers;
        this.#power = power;
    }

    showData() {
        console.log("Марка:", this.#brand);
        console.log("Вместимость пассажиров:", this.#passengers);
        console.log("Мощность:", this.#power);
    }
}

class Automobile extends Transport {
    #doors;

    constructor(brand = "", passengers = 0, power = 0, doors = 4) {
        super();
        this.setData(brand, passengers, power);
        this.#doors = doors;
    }

    inputData() {
        let brand = prompt("Введите марку:");
        let passengers = Number(prompt("Введите вместимость пассажиров:"));
        let power = Number(prompt("Введите мощность:"));
        let doors = Number(prompt("Введите количество дверей:"));

        this.setData(brand, passengers, power);
        this.#doors = doors;
    }

    showData() {
        super.showData();
        console.log("Количество дверей:", this.#doors);
    }
}

let car = new Automobile();

car.inputData();   
car.showData();    
