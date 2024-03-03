// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook 
// (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
// В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.

import { Book } from "./Book.js"

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year)
        this.format = format
    }
    printInfo() {
        console.log(`${this.title} was created by ${this.author} in ${this.year} and has format ${this.format}`)
    }

    get setTitle() {
        return this.title;
    };

    set setTitle(value) {
        if (typeof value !== 'string') throw new Error('Title must be a string');
        this.title = value;
    };

    get setAuthor() {
        return this.author;
    };

    set setAuthor(value) {
        if (value.length < 2) {
            console.log('Value must be more than 2 symbols')
        }
        else {
            this.author = value;
        }
    };

    get setYear() {
        return this.year;
    };

    set setYear(value) {
        if (value < 1999) console.log('Book should be older than 1999')

        if (typeof value !== 'number') console.log('Enter correct year')
        else this.year = value;
    }

    get setFormat() {
        return this.format;
    }

    set setFormat(value) {
        switch (value) {
            case ('pdf'):
                value = value.toUpperCase();
                break;
            case ('docx'):
                value = value + "2.0";
                break;
        }
        this.format = value;
    };
};

const ebook1 = new EBook('The Holy Grail of Investing', 'Tony Robbins', 2022, 'pdf')
export {ebook1}
ebook1.printInfo()

ebook1.setTitle = "2424"
ebook1.setAuthor = 'J'
ebook1.setYear = 1998
ebook1.setFormat = 'tets'

ebook1.printInfo();