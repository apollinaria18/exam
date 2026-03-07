class Building {
    #number;
    #floors;
    #year;

    constructor() {
        this.#number = "";
        this.#floors = 0;
        this.#year = 0;
    }

    setData(number, floors, year) {
        this.#number = number;
        this.#floors = floors;
        this.#year = year;
    }

    showData() {
        console.log("Номер дома:", this.#number);
        console.log("Количество этажей:", this.#floors);
        console.log("Год постройки:", this.#year);
    }
}

class House extends Building {
    #apartments;

    constructor(number = "", floors = 0, year = 0, apartments = 0) {
        super();
        this.setData(number, floors, year);
        this.#apartments = apartments;
    }

    inputData() {
        let number = prompt("Введите номер дома:");
        let floors = Number(prompt("Введите количество этажей:"));
        let year = Number(prompt("Введите год постройки:"));
        let apartments = Number(prompt("Введите количество квартир:"));

        this.setData(number, floors, year);
        this.#apartments = apartments;
    }

    showData() {
        super.showData();
        console.log("Количество квартир:", this.#apartments);
    }
}

let house = new House();
house.inputData();
house.showData();
