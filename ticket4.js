/*Описать формы HTML. Способы передачи данных на сервер, описать их.
Форма – это набор элементов, таких как поля ввода, поля выбора, переключатели. Форма позволяет создавать интерактивные страницы, т.е. организовывать диалог с пользователем.
Форма создается с помощью тега:
<FORM>
</FORM>
 Главное отличие методов POST и GET заключается в способе передачи информации. В методе GET параметры передаются через адресную строку, т.е. по сути в HTTP-заголовке запроса, в то время как в методе POST параметры передаются через тело HTTP-запроса и никак не отражаются на виде адресной строки.
2. Определить модель DOM. Уровни. Структура документа.
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
+	расширенные возможности обработки событий.*/
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
