/*. Описать прототипирование объектов в JavaScript. (25)
Прототипирование – это механизм наследования, при котором объекты получают свойства и методы от других объектов через прототип.
Каждый объект в JS имеет скрытое свойство [[Prototype]], которое ссылается на другой объект – прототип.
Цепочка прототипирования – это последовательность поиска, когда если у объекта нет нужного свойства, JS ищет его в прототипе. 

Основные особенности:
•	Все объекты могут иметь прототип, от которого они наследуют свойства и методы.
•	Прототип позволяет повторно использовать код без копирования методов в каждом объекте.
•	Методы часто добавляют через свойство prototype функции-конструктора.
Пример: 
<html>
<head>
<body>
    <script>
        function Person(name) {
            this.name = name;
        }
        // добавление метода в прототип
        Person.prototype.sayHi = function () {
            console.log("Привет " + this.name);
        };
        let user = new Person("Иван");
        user.sayHi();
    </script>
</body>
</html>
2. Описать наследование функциональных конструкторов, обычное и через прототип в JavaScript. (26)
Наследование функциональных конструкторов – позволяет одному конструктору использовать свойства и методы другого. 
Это реализуется двумя основными способами: 
	обычным наследованием (через вызов конструктора) 
В этом случае конструктор родительского объекта вызывается внутри дочернего с помощью call() или apply().
Это позволяет унаследовать свойства, которые создаются в конструкторе.
Особенность: наследуются свойства, но методы из прототипа родителя не наследуются.
	наследованием через прототип
Этот способ позволяет унаследовать методы, которые находятся в prototype родительского конструктора.
Особенность: дочерний объект получает доступ к методам родительского прототипа.
Пример:
<html>
<body>
    <script>
        // Родительский конструктор
        function Animal(name) {
            this.name = name;
        }
        // метод через prototype
        Animal.prototype.say = function () {
            console.log("Меня зовут " + this.name);
        };
        // Дочерний конструктор
        function Dog(name, breed) {
            Animal.call(this, name); // 1. обычное наследование свойств
            this.breed = breed;
        }
        // 2. наследование методов через prototype
        Dog.prototype = Object.create(Animal.prototype);
        Dog.prototype.constructor = Dog;
        let dog = new Dog("Бобик", "Овчарка");
        dog.say(); // Меня зовут Бобик
    </script>
</body>
</html> */
class Operator {
    #name;
    #pricePerMinute;
    #coverage;

    constructor() {
        this.#name = "";
        this.#pricePerMinute = 0;
        this.#coverage = "";
    }

    setData(name, pricePerMinute, coverage) {
        this.#name = name;
        this.#pricePerMinute = pricePerMinute;
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

    constructor(name = "", pricePerMinute = 0, coverage = "", balance = 0) {
        super();
        this.setData(name, pricePerMinute, coverage);
        this.#balance = balance;
    }

    inputData() {
        let name = prompt("Введите название оператора:");
        let pricePerMinute = Number(prompt("Введите стоимость 1 минуты:"));
        let coverage = prompt("Введите площадь покрытия:");
        let balance = Number(prompt("Введите количество средств на счете:"));

        this.setData(name, pricePerMinute, coverage);
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
