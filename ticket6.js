class Gadget {
    #power;
    #isOn;

    constructor() {
        this.#power = 0;
        this.#isOn = false;
    }

    setData(power, isOn) {
        this.#power = power;
        this.#isOn = isOn;
    }

    showData() {
        console.log("Мощность:", this.#power);
        console.log("Состояние включения:", this.#isOn);
    }
}

class Television extends Gadget {
    #producer;
    #screenSize;

    constructor(power = 0, isOn = false, producer = "", screenSize = 0) {
        super();
        this.setData(power, isOn);
        this.#producer = producer;
        this.#screenSize = screenSize;
    }

    inputData() {
        let power = Number(prompt("Введите мощность:"));
        let state = prompt("Включен? (true/false)") === "true";
        let producer = prompt("Введите производителя:");
        let screen = Number(prompt("Введите диагональ экрана:"));

        this.setData(power, state);
        this.#producer = producer;
        this.#screenSize = screen;
    }

    showData() {
        super.showData();
        console.log("Производитель:", this.#producer);
        console.log("Диагональ экрана:", this.#screenSize);
    }
}

let tv = new Television();
tv.inputData();
tv.showData();
