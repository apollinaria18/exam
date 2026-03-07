class Town {
    #name;
    #population;
    #schools;

    constructor() {
        this.#name = "";
        this.#population = 0;
        this.#schools = 0;
    }

    setData(name, population, schools) {
        this.#name = name;
        this.#population = population;
        this.#schools = schools;
    }

    showData() {
        console.log("Название города:", this.#name);
        console.log("Количество жителей:", this.#population);
        console.log("Количество школ:", this.#schools);
    }
}

class School extends Town {
    #graduates;

    constructor(name = "", population = 0, schools = 0, graduates = 0) {
        super();
        this.setData(name, population, schools);
        this.#graduates = graduates;
    }

    inputData() {
        let name = prompt("Введите название города:");
        let population = Number(prompt("Введите количество жителей:"));
        let schools = Number(prompt("Введите количество школ:"));
        let graduates = Number(prompt("Введите количество выпускников:"));

        this.setData(name, population, schools);
        this.#graduates = graduates;
    }

    showData() {
        super.showData();
        console.log("Количество выпускников:", this.#graduates);
    }
}

let school = new School();
school.inputData();
school.showData();
