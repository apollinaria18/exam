class Tenant {
    #name;
    #birthDate;
    #address;

    constructor() {
        this.#name = "";
        this.#birthDate = [0, 0, 0];
        this.#address = "";
    }

    setData(name, birthDate, address) {
        this.#name = name;
        this.#birthDate = birthDate;
        this.#address = address;
    }

    showData() {
        console.log("Фамилия и инициалы:", this.#name);
        console.log("Дата рождения:", this.#birthDate.join("."));
        console.log("Адрес:", this.#address);
    }
}

class Count extends Tenant {
    #stays;

    constructor(name = "", birthDate = [0,0,0], address = "", stays = 0) {
        super();
        this.setData(name, birthDate, address);
        this.#stays = stays;
    }

    inputData() {
        let name = prompt("Введите фамилию и инициалы:");
        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));
        let address = prompt("Введите адрес:");
        let stays = Number(prompt("Введите количество остановок в отеле:"));

        this.setData(name, [day, month, year], address);
        this.#stays = stays;
    }

    showData() {
        super.showData();
        console.log("Количество остановок в отеле:", this.#stays);
    }
}

let count = new Count();
count.inputData();
count.showData();
