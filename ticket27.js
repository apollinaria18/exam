/*Описать элементы формы HTML, назначение и виды.
4.	Текстовые поля - для ввода текстовой информации
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
5.	Элемент <select> - раскрывающийся список, список с множественным выбором
<select name="students" multiple>
<option value="Tom">Tom<option/>
<option value="Мишель">Мишель<option/>
<option value="Helen" selected>Хелен<option/>
<select/>
6.	Элемент <textarea> - поле для ввода многострочного текста
<textarea cols="30" rows="5">
Потрясающий комментарий
с текстом новой строки
<textarea/>
2. Определить классы в языке JavaScript. (28)
Наследование классов – позволяет создавать новый класс на основе уже существующего. 
Дочерний класс получает свойства и методы родительского класса и может добавлять собственные или переопределять существующие.
Основные элементы наследования
•	extends — используется для создания дочернего класса на основе родительского.
•	super() — вызывает конструктор родительского класса и позволяет получить его свойства.
Дочерний класс может расширять или изменять поведение родительского.
*/
class Town {
    #name;
    #population;
    #schools;

    constructor() {
        this.#name = "";
        this.#population = 0;
        this.#schools = 0;
    }

    setData(name, population, schools) {
        this.#name = name;
        this.#population = population;
        this.#schools = schools;
    }

    showData() {
        console.log("Название города:", this.#name);
        console.log("Количество жителей:", this.#population);
        console.log("Количество школ:", this.#schools);
    }
}

class School extends Town {
    #graduates;

    constructor(name = "", population = 0, schools = 0, graduates = 0) {
        super();
        this.setData(name, population, schools);
        this.#graduates = graduates;
    }

    inputData() {
        let name = prompt("Введите название города:");
        let population = Number(prompt("Введите количество жителей:"));
        let schools = Number(prompt("Введите количество школ:"));
        let graduates = Number(prompt("Введите количество выпускников:"));

        this.setData(name, population, schools);
        this.#graduates = graduates;
    }

    showData() {
        super.showData();
        console.log("Количество выпускников:", this.#graduates);
    }
}

let school = new School();
school.inputData();
school.showData();
