/*Дать определение массивам JavaScript. Методы работы с массивами JavaScript.
Массивы JS – для хранения упорядоченных коллекций существует особая структура данных, которая называется массив, Array.
Объявление пустого массива: let arr = new Array(); или let arr = [];
Основные методы:
	push - добавляет элемент в конец.
	pop - удаляет последний элемент,
	shift - удаляет элемент из начала,
	unshift - добавляет элементы в начало.
Методы работы с массивами:
	some()
Проверяет, удовлетворяет ли хоть один элемент массива заданному условию. True/False.
const myArray = ["a", "b", "c", "d", "e"]
myArray.some(test => test === "d") //true
	reduce()
Для перебора массива и приведения его к одному результирующему значению (сворачивание).
const myArray = [1, 2, 3, 4, 5]
myArray.reduce((total, value) => total * value) // 1 * 2 * 3 * 4 * 5 = 120
	every()
Проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции. True/False.
const ages = [21, 18, 30, 25]; // Проверяем, все ли совершеннолетние
const allAdults = ages.every(age => age >= 18); // true
	map()
Принимает функцию в качестве параметра и создает новый массив с результатом вызова указанной функции для каждого элемента массива. Он всегда будет возвращать одинаковое количество элементов.
myArray = [5, 4, 3, 2, 1]
myArray.map(x => x * x) // 25 16 9 4 1
	flat()
Принимает в качестве аргумента массив массивов и j,]tlbyztn вложенные массивы в массив верхнего уровня.
const myArray = [[1, 2], [3, 4], 5]
myArray.flat() // [1, 2, 3, 4, 5]
	filter()
Cоздаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
const myArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
  { id: 4, name: "Mass" }, ]
myArray.filter(element => element.name === "Mass") // 0:{id: 3, name: "Mass"}, 1:{id: 4, name: "Mass"}
	forEach()
Этот метод используется для перебора массива.
const myArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" }, ]
myArray.forEach(element => console.log(element.name)) // john, Ali, Mass
	findIndex()
Используется для поиска индекса первого элемента массива, который соответствует условию. Если ничего не найдено, возвращает -1.
const numbers = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
const index = numbers.findIndex(isLargeNumber);
console.log(index); // Вывод: 3
	find()
Возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию.
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(element => element > 10);
console.log(found); // 12 (первый элемент > 10)
	sort()
Сортирует элементы массива и возвращает его.
let nums = [10, 5, 100, 1]; // b – a – от больш к меньш
nums.sort((a, b) => a - b); // [1, 5, 10, 100]
	concat()
Объединяет два или более массива/значения и возвращает новый массив.
const myArray = [1, 2, 3, 4, 5]
const myArray2 = [10, 20, 30, 40, 50]
myArray.concat(myAwesomeArray2) // [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]
	fill(значение, начало, конец)
Заполняет массив заданными значениями.
const myArray = [1, 2, 3, 4, 5]
myArray.fill(0, 1, 3) // [1, 0, 0, 4, 5]
	includes()
Возвращает значение true, если массив содержит определенный элемент, и значение false — если нет.
const myArray = [1, 2, 3, 4, 5]
myArray.includes(3) // true
myArray.includes(8) // false
	reverse()
Этот метод меняет порядок следования элементов в массиве на обратный. Первый элемент становится последним, а последний — первым.
const myArray = ["e", "d", "c", "b", "a"]
myArray.reverse() // ['a', 'b', 'c', 'd', 'e']
	flatMap()
Этот метод применяет функцию к каждому элементу массива, а затем объединяет результат в новый массив.
const myArray = [[1], [2], [3], [4], [5]]
myArray.flatMap(arr => arr * 10) // [10, 20, 30, 40, 50]
2. Описать работу с файлами и каталогами в PHP.
Работа с файлами и каталогами в PHP – позволяет создавать, читать, записывать и удалять файлы, а также управлять папками на сервере.
Добавить файл с помощью инструкций:
	include() – подключает источник во время выполнения программы. Поддерживает множественное чтение файла. При ошибке будет выведено предупреждающее сообщение, а код продолжится со следующей строки.
	require() – подключает файл до выполнения программы и возможно лишь одно обращение к файлу. При повторном обращении - глобальная ошибка и остановит выполнение программы. 
Основные функции работы с файлами:
	Открытие и создание файлов:
fopen("file.txt", "w"); // w – запись (удаление всего, в начало), w+ – чтение и запись (удаление всего, в начало)
fopen("file.txt", "r"); // r – для чтения, r+ – чтение и запись в начало
// a – запись (в конец), a+ – чтение и запись (в конец)
	Чтение и запись:
fwrite($file, "Текст"); // записывает в файл
fread($file, filesize("file.txt")); // читает содержимое
	Закрытие файла:
fclose($file);
	Удаление файла:
unlink("file.txt");
Основные функции работы с каталогами
	Создание каталога:
mkdir("new_folder");
	Удаление каталога:
rmdir("new_folder");
	Список файлов в каталоге:
scandir("folder_name");
*/
class Zodiac {
    #name;
    #sign;
    #birthDate;

    constructor() {
        this.#name = "";
        this.#sign = "";
        this.#birthDate = [0, 0, 0];
    }

    setData(name, sign, birthDate) {
        this.#name = name;
        this.#sign = sign;
        this.#birthDate = birthDate;
    }

    showData() {
        console.log("Фамилия и имя:", this.#name);
        console.log("Знак Зодиака:", this.#sign);
        console.log("Дата рождения:", this.#birthDate.join("."));
    }
}

class Tel extends Zodiac {
    #phone;

    constructor(name = "", sign = "", birthDate = [0, 0, 0], phone = "") {
        super();
        this.setData(name, sign, birthDate);
        this.#phone = phone;
    }

    inputData() {
        let name = prompt("Введите фамилию и имя:");
        let sign = prompt("Введите знак Зодиака:");
        let day = Number(prompt("Введите день рождения:"));
        let month = Number(prompt("Введите месяц рождения:"));
        let year = Number(prompt("Введите год рождения:"));
        let phone = prompt("Введите телефон:");

        this.setData(name, sign, [day, month, year]);
        this.#phone = phone;
    }

    showData() {
        super.showData();
        console.log("Телефон:", this.#phone);
    }
}

let tel = new Tel();
tel.inputData();
tel.showData();
