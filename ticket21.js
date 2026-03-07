class Zodiac {
    #name;
    #sign;
    #birthDate;

    constructor() {
        this.#name = "";
        this.#sign = "";
        this.#birthDate = [0, 0, 0];
    }

    setData(name, sign, birthDate) {
        this.#name = name;
        this.#sign = sign;
        this.#birthDate = birthDate;
    }

    showData() {
        console.log("Фамилия и имя:", this.#name);
        console.log("Знак Зодиака:", this.#sign);
        console.log("Дата рождения:", this.#birthDate.join("."));
    }
}

class Tel extends Zodiac {
    #phone;

    constructor(name = "", sign = "", birthDate = [0, 0, 0], phone = "") {
        super();
        this.setData(name, sign, birthDate);
        this.#phone = phone;
    }

    inputData() {
        let name = prompt("Введите фамилию и имя:");
        let sign = prompt("Введите знак Зодиака:");
        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));
        let phone = prompt("Введите телефон:");

        this.setData(name, sign, [day, month, year]);
        this.#phone = phone;
    }

    showData() {
        super.showData();
        console.log("Телефон:", this.#phone);
    }
}

let tel = new Tel();
tel.inputData();
tel.showData();
