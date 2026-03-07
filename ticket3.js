class Operator {
    #name;
    #pricePerMinute;
    #coverage;

    constructor() {
        this.#name = "";
        this.#pricePerMinute = 0;
        this.#coverage = "";
    }

    setData(name, price, coverage) {
        this.#name = name;
        this.#pricePerMinute = price;
        this.#coverage = coverage;
    }

    showData() {
        console.log("Название оператора:", this.#name);
        console.log("Стоимость 1 минуты:", this.#pricePerMinute);
        console.log("Площадь покрытия:", this.#coverage);
    }
}

class Client extends Operator {
    #balance;

    constructor(name = "", price = 0, coverage = "", balance = 0) {
        super();
        this.setData(name, price, coverage);
        this.#balance = balance;
    }

    inputData() {
        let name = prompt("Введите название оператора:");
        let price = Number(prompt("Введите стоимость 1 минуты:"));
        let coverage = prompt("Введите площадь покрытия:");
        let balance = Number(prompt("Введите количество средств на счете:"));

        this.setData(name, price, coverage);
        this.#balance = balance;
    }

    showData() {
        super.showData();
        console.log("Средства на счете:", this.#balance);
    }
}

let client = new Client();

client.inputData();   
client.showData();  
