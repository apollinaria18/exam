class Human {
    #name;
    #height;
    #weight;
    #birthDate;

    constructor() {
        this.#name = "";
        this.#height = 0;
        this.#weight = 0;
        this.#birthDate = [0, 0, 0];
    }

    setData(name, height, weight, birthDate) {
        this.#name = name;
        this.#height = height;
        this.#weight = weight;
        this.#birthDate = birthDate;
    }

    showData() {
        console.log("Фамилия и имя:", this.#name);
        console.log("Рост:", this.#height);
        console.log("Вес:", this.#weight);
        console.log("Дата рождения:", this.#birthDate.join("."));
    }
}

class Sportsman extends Human {
    #awards;

    constructor(name = "", height = 0, weight = 0, birthDate = [0,0,0], awards = 0) {
        super();
        this.setData(name, height, weight, birthDate);
        this.#awards = awards;
    }

    inputData() {
        let name = prompt("Введите фамилию и имя:");
        let height = Number(prompt("Введите рост:"));
        let weight = Number(prompt("Введите вес:"));
        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));
        let awards = Number(prompt("Введите число наград:"));

        this.setData(name, height, weight, [day, month, year]);
        this.#awards = awards;
    }

    showData() {
        super.showData();
        console.log("Число наград:", this.#awards);
    }
}

let sportsman = new Sportsman();
sportsman.inputData();
sportsman.showData();
