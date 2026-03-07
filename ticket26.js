class Score {
    #payerAccount;
    #receiverAccount;
    #amount;

    constructor() {
        this.#payerAccount = "";
        this.#receiverAccount = "";
        this.#amount = 0;
    }

    setData(payerAccount, receiverAccount, amount) {
        this.#payerAccount = payerAccount;
        this.#receiverAccount = receiverAccount;
        this.#amount = amount;
    }

    showData() {
        console.log("Расчетный счет плательщика:", this.#payerAccount);
        console.log("Расчетный счет получателя:", this.#receiverAccount);
        console.log("Сумма (руб.):", this.#amount);
    }
}

class Bank extends Score {
    #senderBank;

    constructor(payerAccount = "", receiverAccount = "", amount = 0, senderBank = "") {
        super();
        this.setData(payerAccount, receiverAccount, amount);
        this.#senderBank = senderBank;
    }

    inputData() {
        let payerAccount = prompt("Введите расчетный счет плательщика:");
        let receiverAccount = prompt("Введите расчетный счет получателя:");
        let amount = Number(prompt("Введите сумму в рублях:"));
        let senderBank = prompt("Введите банк-отправитель:");

        this.setData(payerAccount, receiverAccount, amount);
        this.#senderBank = senderBank;
    }

    showData() {
        super.showData();
        console.log("Банк-отправитель:", this.#senderBank);
    }
}

let bankTransaction = new Bank();
bankTransaction.inputData();
bankTransaction.showData();
