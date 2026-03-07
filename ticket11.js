class Human {
    #surname;
    #height;
    #weight;
    #birthDate;

    constructor() {
        this.#surname = "";
        this.#height = 0;
        this.#weight = 0;
        this.#birthDate = [0, 0, 0];
    }

    setData(surname, height, weight, birthDate) {
        this.#surname = surname;
        this.#height = height;
        this.#weight = weight;
        this.#birthDate = birthDate;
    }

    showData() {
        console.log("Фамилия и имя:", this.#surname);
        console.log("Рост:", this.#height);
        console.log("Вес:", this.#weight);
        console.log("Дата рождения:", this.#birthDate.join("."));
    }
}

class Director extends Human {
    #score;

    constructor(surname = "", height = 0, weight = 0, birthDate = [0, 0, 0], score = 0) {
        super();
        this.setData(surname, height, weight, birthDate);
        this.#score = score;
    }

    inputData() {
        let surname = prompt("Введите фамилию и имя:");
        let height = Number(prompt("Введите рост:"));
        let weight = Number(prompt("Введите вес:"));
        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));
        let score = Number(prompt("Оценка (в баллах):"));

        this.setData(surname, height, weight, [day, month, year]);
        this.#score = score;
    }

    showData() {
        super.showData();
        console.log("Оценка сотрудников:", this.#score);
    }
}

let director = new Director();
director.inputData();
director.showData();
