/*Описать способы создания функционального конструктора классов JavaScript.
Функциональный конструктор – используется, если нужно создать множество похожих, однотипных объектов, таких как пользователи, элементы меню и так далее.
Функции-конструкторы технически являются обычными функциями. Но есть два соглашения:
1)	Имя функции-конструктора должно начинаться с большой буквы.
2)	Функция-конструктор должна выполняться только с помощью оператора "new".
3)	Для установки свойств и методов используется ключевое слово this.
Способы создания функционального конструктора:
•	Через функцию-конструктор
	this внутри функции указывает на создаваемый объект.
•	Через прототип для методов
	Преимущество: экономия памяти, так как метод хранится в прототипе, а не у каждого объекта.
•	Создание объектов через Object.create (вариант функционального подхода)
Здесь объект создаётся на основе прототипа, а функции-конструкторы формально не используются, но это функциональный подход к созданию «классов».
Определить модель DOM. Уровни. Структура документа.
DOM – это объектная модель документа, которая представляет HTML- или XML-документ в виде структуры объектов (дерева), доступных для управления с помощью JavaScript.
DOM позволяет программно изменять содержимое страницы, структуру документа, стили и атрибуты элементов.
Структура документа DOM:
•	document – корневой объект документа;
•	element – HTML-элементы (html, body, div, p и др.);
•	attribute – атрибуты элементов;
•	text – текстовое содержимое элементов.
Пример структуры:
document
 └── html
     ├── head
     └── body
         ├── h1
         └── p
Уровни DOM
	Level 0
Позволяла работать с базовыми объектами страницы.
	Level 1
+	работа с элементами;
+	навигация по дереву DOM;
+	изменение структуры документа.
	Level 2
+	события;
+	стили CSS;
+	улучшенная работа с документами.
	Level 3
+	дополнительные методы работы с документами;
+	поддержка XML;
+	расширенные возможности обработки событий.
*/
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
