/*Описать элементы формы HTML, назначение и виды.
1.	Текстовые поля - для ввода текстовой информации
<input type=text name=имя_параметра [value=значение] [size=размер_поля] [maxlen=длина_поля]>, где 
○	 maxlen - максимально допустимой длиной текста 
○	size - количество знакомест
○	Value - в поле будет изначально отображаться значение данного атрибута
•	<input> text - текстовое поле
<input type="text" name="name" value="Peter"/>
<input type="text" name="surname" value="Jackson"/>
•	<input> password - поле с паролем
<input type="password"/>
•	<input> radio – переключатель
<input type="radio" name="iso_code" value="uk"/>
<input type="radio" name="iso_code" value="en"/>
<input type="radio" name="iso_code" value="de"/>
•	<input> checkbox - флажок
<input type="checkbox" name="ppt" value="ppt"/>
<input type="checkbox" name="pdf" value="pdf"/>
<input type="checkbox" name="txt" value="txt"/>
•	<input> hidden - скрытое поле
<input type="hidden" value="User_Identifier"/>
•	<input> submit - кнопка для отправки формы
<input type="submit" value="Search"/>
•	<input> reset - кнопка для очистки формы
<input type="reset" value="Clear"/>
•	<input> file - поле для отправки файла. Атрибут enctypе формы должен иметь значения multipart/form-data.
<form enctype="multipart/form-data" action="upload.php" method="post">
<input name="my_file" type="file">
<input type="submit" value="Отправить">
</form>
·      <input> image - кнопка с изображением
<input type="image" src="path/to/image"/>
2.	Элемент <select> - раскрывающийся список, список с множественным выбором
<select name="students" multiple>
<option value="Tom">Tom<option/>
<option value="Мишель">Мишель<option/>
<option value="Helen" selected>Хелен<option/>
<select/>
3.	Элемент <textarea> - поле для ввода многострочного текста
<textarea cols="30" rows="5">
Потрясающий комментарий
с текстом новой строки
<textarea/>
2. Описать навигацию по дереву документов. Создание узлов.
Навигация по дереву документов DOM – это перемещение по структуре HTML-документа, представленной в виде иерархического дерева узлов. 
JavaScript позволяет получать доступ к родительским, дочерним и соседним элементам и изменять структуру страницы.
Свойства навигации:
•	Родитель (parentNode, parentElement)
•	Первый дочерний (firstChild, firstElementChild)
•	Последний дочерний (lastChild, lastElementChild)
•	Следующий (nextSibling, nextElementSibling)
•	Предыдущий (previousSibling, previousElementSibling)
•	Все дочерние (childNodes, children)
Создание узлов DOM
Создание и добавление новых элементов в документ.
Основные методы:
•	createElement() – создание нового HTML-элемента;
•	createTextNode() – создание текстового узла;
•	appendChild() – добавление узла в конец родительского элемента;
•	insertBefore() – вставка узла перед другим элементом.*/
class Phone {
    #brand;
    #price;

    constructor() {
        this.#brand = "";
        this.#price = 0;
    }

    setData(brand, price) {
        this.#brand = brand;
        this.#price = price;
    }

    showData() {
        console.log("Марка:", this.#brand);
        console.log("Цена:", this.#price);
    }
}

class Mobile extends Phone {
    #memory;
    #simCount;

    constructor(brand = "", price = 0, memory = 0, simCount = 1) {
        super();
        this.setData(brand, price);
        this.#memory = memory;
        this.#simCount = simCount;
    }

    inputData() {
        let brand = prompt("Введите марку:");
        let price = Number(prompt("Введите цену:"));
        let memory = Number(prompt("Введите объем памяти:"));
        let sim = Number(prompt("Введите количество сим-карт:"));

        this.setData(brand, price);
        this.#memory = memory;
        this.#simCount = sim;
    }

    showData() {
        super.showData();
        console.log("Объем памяти:", this.#memory);
        console.log("Количество сим-карт:", this.#simCount);
    }
}

let phone = new Mobile();
phone.inputData();
phone.showData();
