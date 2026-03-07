class Animal {
    #diet;
    #habitat;
    #height;

    constructor() {
        this.#diet = "";
        this.#habitat = "";
        this.#height = 0;
    }

    setData(diet, habitat, height) {
        this.#diet = diet;
        this.#habitat = habitat;
        this.#height = height;
    }

    showData() {
        console.log("Рацион питания:", this.#diet);
        console.log("Место проживания:", this.#habitat);
        console.log("Рост:", this.#height);
    }
}

class Dog extends Animal {
    #breed;

    constructor(diet = "", habitat = "", height = 0, breed = "") {
        super();
        this.setData(diet, habitat, height);
        this.#breed = breed;
    }

    inputData() {
        let diet = prompt("Введите рацион питания:");
        let habitat = prompt("Введите место проживания:");
        let height = Number(prompt("Введите рост:"));
        let breed = prompt("Введите породу:");

        this.setData(diet, habitat, height);
        this.#breed = breed;
    }

    showData() {
        super.showData();
        console.log("Порода:", this.#breed);
    }
}

let dog = new Dog();
dog.inputData();
dog.showData();
