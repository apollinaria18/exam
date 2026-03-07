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

class Programmer extends Human {
    #languages;

    constructor(name = "", height = 0, weight = 0, birthDate = [0,0,0], languages = "") {
        super();
        this.setData(name, height, weight, birthDate);
        this.#languages = languages;
    }

    inputData() {
        let name = prompt("Введите фамилию и имя:");
        let height = Number(prompt("Введите рост:"));
        let weight = Number(prompt("Введите вес:"));

        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));

        let languages = prompt("Какие языки программирования знаете?");

        this.setData(name, height, weight, [day, month, year]);
        this.#languages = languages;
    }

    showData() {
        super.showData();
        console.log("Языки программирования:", this.#languages);
    }
}

let prog = new Programmer();

prog.inputData();  
prog.showData();  
