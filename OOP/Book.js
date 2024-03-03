export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`${this.title} was created by ${this.author} in ${this.year}`);
    };

    get Title() {
        return this.title;
    };

    set Title(value) {
        if (typeof value !== 'string') throw new Error('Title must be a string');
        this.title = value;
    };

    get Author() {
        return this.author;
    };

    set Author(value) {
        if (value.length < 2) {
            console.log('Value must be more than 2 symbols');
        }
        else {
            this.author = value;
        };
    };

    get Year() {
        return this.year;
    };

    set Year(value) {
        if (isNaN(value)) console.log(`${value} in not a number`);
        this.year = value;
    };

    static oldestBook(objs) {
        if (Array.isArray(objs) && objs.length) {
            const sortedArr = [...objs].sort((a, b) => a.year - b.year);
            return sortedArr[0];
        };
    };
};

const book1 = new Book('Zapovit', 'Taras Shevchenko', 1864);
const book2 = new Book('Harry Potter', 'J.K. Rowling', 2010);

book1.printInfo();
book2.printInfo();

const bookName = book1.Title;
console.log(bookName, "bookname");

const bookAuthor = book2.Author;
console.log(bookAuthor, "bookAuthor");

const bookYear = book1.Year;
console.log(bookYear, "bookYear");

book1.Title = "Kateryna";
book2.Title = "test";

book1.Author = "Ivan Franko";
book2.Author = "test";

book1.Year = 2000;
book2.Year = 1976;

book1.printInfo();
book2.printInfo();