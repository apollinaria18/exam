class Student {
    #fio;
    #average;
    #group;

    constructor() {
        this.#fio = "";
        this.#average = 0;
        this.#group = "";
    }

    setData(fio, average, group) {
        this.#fio = fio;
        this.#average = average;
        this.#group = group;
    }

    showData() {
        console.log("ФИО:", this.#fio);
        console.log("Средний балл:", this.#average);
        console.log("Группа:", this.#group);
    }
}

class Aspirant extends Student {
    #degree;

    constructor(fio = "", average = 0, group = "", degree = "") {
        super();
        this.setData(fio, average, group);
        this.#degree = degree;
    }

    inputData() {
        let fio = prompt("Введите ФИО:");
        let average = Number(prompt("Введите средний балл:"));
        let group = prompt("Введите группу:");
        let degree = prompt("Введите ученую степень:");

        this.setData(fio, average, group);
        this.#degree = degree;
    }

    showData() {
        super.showData();
        console.log("Ученая степень:", this.#degree);
    }
}

let aspirant = new Aspirant();
aspirant.inputData();
aspirant.showData();
