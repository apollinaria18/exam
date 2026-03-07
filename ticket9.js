class Student {
    #name;
    #address;
    #grades;

    constructor() {
        this.#name = "";
        this.#address = "";
        this.#grades = [0, 0, 0];
    }

    setData(name, address, grades) {
        this.#name = name;
        this.#address = address;
        this.#grades = grades;
    }

    showData() {
        console.log("Фамилия и инициалы:", this.#name);
        console.log("Адрес:", this.#address);
        console.log("Оценки:", this.#grades.join(", "));
    }
}

class StudentExtended extends Student {
    #average;

    constructor(name = "", address = "", grades = [0, 0, 0]) {
        super();
        this.setData(name, address, grades);
        this.#average = 0;
    }

    inputData() {
        let name = prompt("Введите фамилию и инициалы:");
        let address = prompt("Введите адрес:");
        let g1 = Number(prompt("Оценка по предмету 1:"));
        let g2 = Number(prompt("Оценка по предмету 2:"));
        let g3 = Number(prompt("Оценка по предмету 3:"));

        let grades = [g1, g2, g3];
        this.setData(name, address, grades);
        this.#average = (g1 + g2 + g3) / 3;
    }

    showData() {
        super.showData();
        console.log("Средний балл:", this.#average.toFixed(2));
    }
}

let st = new StudentExtended();
st.inputData();
st.showData();
