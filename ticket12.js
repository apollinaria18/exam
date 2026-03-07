class Bus {
    #destination;
    #routeNumber;
    #departureTime;

    constructor() {
        this.#destination = "";
        this.#routeNumber = "";
        this.#departureTime = "";
    }

    setData(destination, routeNumber, departureTime) {
        this.#destination = destination;
        this.#routeNumber = routeNumber;
        this.#departureTime = departureTime;
    }

    showData() {
        console.log("Пункт назначения:", this.#destination);
        console.log("Номер маршрута:", this.#routeNumber);
        console.log("Время отправления:", this.#departureTime);
    }
}

class Bilet extends Bus {
    #price;

    constructor(destination = "", routeNumber = "", departureTime = "", price = 0) {
        super();
        this.setData(destination, routeNumber, departureTime);
        this.#price = price;
    }

    inputData() {
        let destination = prompt("Введите пункт назначения:");
        let routeNumber = prompt("Введите номер маршрута:");
        let departureTime = prompt("Введите время отправления:");
        let price = Number(prompt("Введите стоимость билета:"));

        this.setData(destination, routeNumber, departureTime);
        this.#price = price;
    }

    showData() {
        super.showData();
        console.log("Стоимость билета:", this.#price);
    }
}

let ticket = new Bilet();
ticket.inputData();
ticket.showData();
