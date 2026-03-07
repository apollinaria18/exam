class City {
    #name;
    #population;
    #universities;

    constructor() {
        this.#name = "";
        this.#population = 0;
        this.#universities = 0;
    }

    setData(name, population, universities) {
        this.#name = name;
        this.#population = population;
        this.#universities = universities;
    }

    showData() {
        console.log("Название города:", this.#name);
        console.log("Количество жителей:", this.#population);
        console.log("Количество ВУЗов:", this.#universities);
    }
}

class School extends City {
    #graduates;

    constructor(name = "", population = 0, universities = 0, graduates = 0) {
        super();
        this.setData(name, population, universities);
        this.#graduates = graduates;
    }

    inputData() {
        let name = prompt("Введите название города:");
        let population = Number(prompt("Введите количество жителей:"));
        let universities = Number(prompt("Введите количество ВУЗов:"));
        let graduates = Number(prompt("Введите количество выпускников:"));

        this.setData(name, population, universities);
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
