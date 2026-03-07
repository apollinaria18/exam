class User {
    #name;
    #birthDate;

    constructor() {
        this.#name = "";
        this.#birthDate = [0, 0, 0];
    }

    setData(name, birthDate) {
        this.#name = name;
        this.#birthDate = birthDate;
    }

    showData() {
        console.log("Фамилия и имя:", this.#name);
        console.log("Дата рождения:", this.#birthDate.join("."));
    }
}

class Contacts extends User {
    #email;
    #phone;

    constructor(name = "", birthDate = [0,0,0], email = "", phone = "") {
        super();
        this.setData(name, birthDate);
        this.#email = email;
        this.#phone = phone;
    }

    inputData() {
        let name = prompt("Введите фамилию и имя:");

        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));

        let email = prompt("Введите электронную почту:");
        let phone = prompt("Введите номер телефона:");

        this.setData(name, [day, month, year]);
        this.#email = email;
        this.#phone = phone;
    }

    showData() {
        super.showData();
        console.log("Email:", this.#email);
        console.log("Телефон:", this.#phone);
    }
}

let contact = new Contacts();

contact.inputData();   
contact.showData();    
