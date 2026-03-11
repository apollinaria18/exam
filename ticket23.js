/*Определить понятие области видимости переменных JavaScript.
Переменная – это именованная область в оперативной памяти компьютера, предназначенная для хранения различной информации.
Область видимости определяет, где в коде можно обратиться к переменной по имени. Различают следующие виды областей видимости:
1.	Глобальная — переменная объявлена вне всех функций и доступна во всей программе.
2.	Функциональная (локальная) — переменная объявлена внутри функции и доступна только в её пределах.
3.	Блочная — переменные, объявленные с let или const, доступны только внутри блока { }, где они объявлены.
Пример: 
<html>
<head>
<body>
    <script>
        const global = "Я глобальная";
        function demo() {
            const func = "Я внутри функции";
            if (true) {
                var a = "Я var (видна во всей функции)";
                let b = "Я let (видна только в этом блоке)";
                console.log(b); }
            console.log(global);
            console.log(func);
            console.log(a);}
        demo();
    </script>
</body>
</html>
2. Описать работу с массивами в PHP.
Массив – это структура, в которой хранится упорядоченный набор данных. Эти данные называются элементами массива. Каждый элемент массива имеет свой уникальный индекс.
Основные типы массивов:
	Индексированные массивы – элементы имеют числовые индексы.
	Ассоциативные массивы – элементы имеют ключи в виде строк.
	Многомерные массивы – массивы внутри массивов.
Основные операции с массивами:
•	Создание массива:
$colors = array("красный", "зелёный", "синий"); // индексированный
$user = array("name" => "Анна", "age" => 25);   // ассоциативный
•	Доступ к элементам:
echo $colors[0];       // красный
echo $user["name"];    // Анна
•	Добавление элемента:
$colors[] = "жёлтый";          // индексированный массив
$user["email"] = "anna@mail.com"; // ассоциативный массив
•	Перебор массива:
foreach ($colors as $color) {
    echo $color . "<br>";
}
•	Удаление элемента:
unset($colors[1]);    // удаляет зелёный
Функции для массивов:
•	count($array) – количество элементов
•	array_merge($a1, $a2) – объединение массивов
•	array_keys($array) – возвращает ключи
•	array_values($array) – возвращает значения
*/
class Tenant {
    #name;
    #birthDate;
    #address;

    constructor() {
        this.#name = "";
        this.#birthDate = [0, 0, 0];
        this.#address = "";
    }

    setData(name, birthDate, address) {
        this.#name = name;
        this.#birthDate = birthDate;
        this.#address = address;
    }

    showData() {
        console.log("Фамилия и инициалы:", this.#name);
        console.log("Дата рождения:", this.#birthDate.join("."));
        console.log("Адрес:", this.#address);
    }
}

class Count extends Tenant {
    #stays;

    constructor(name = "", birthDate = [0,0,0], address = "", stays = 0) {
        super();
        this.setData(name, birthDate, address);
        this.#stays = stays;
    }

    inputData() {
        let name = prompt("Введите фамилию и инициалы:");
        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));
        let address = prompt("Введите адрес:");
        let stays = Number(prompt("Введите количество остановок в отеле:"));

        this.setData(name, [day, month, year], address);
        this.#stays = stays;
    }

    showData() {
        super.showData();
        console.log("Количество остановок в отеле:", this.#stays);
    }
}

let count = new Count();
count.inputData();
count.showData();
