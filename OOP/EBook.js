import { Book } from "./Book.js";

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    };

    printInfo() {
        console.log(`${this.title} was created by ${this.author} in ${this.year} and has format ${this.format}`);
    };

    get Format() {
        return this.format;
    }

    set Format(value) {
        switch (value) {
            case ('pdf'):
                value = value.toUpperCase();
                break;
            case ('docx'):
                value = value + "2.0";
                break;
        };
        this.format = value;
    };

    static convertBookToEBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    };
};

const ebook1 = new EBook('The Holy Grail of Investing', 'Tony Robbins', 2022, 'pdf');
ebook1.printInfo();

const formatBook = ebook1.Format;
console.log(formatBook, 'formatBook');

ebook1.Title = "Title";
ebook1.Author = 'J.K.';
ebook1.Year = 1998;
ebook1.Format = 'docx';

ebook1.printInfo();

const book1 = new Book('Zapovit', 'Taras Shevchenko', 1864);
const book2 = new Book('Harry Potter', 'J.K. Rowling', 2010);

let books = [book1, book2, ebook1];
const objOfOldestBook = Book.oldestBook(books);
console.log(objOfOldestBook);

const newEBook = EBook.convertBookToEBook(book1, 'csv');
console.log(newEBook, 'newEBook');