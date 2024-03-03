// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.



// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. 
// Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та  EBook)

export class Book {
    constructor(title, author, year) {
        this.title = title
        this.author = author
        this.year = year
    }

    printInfo() {
        console.log(`${this.title} was created by ${this.author} in ${this.year}`)
    }

    get setTitle() {
        return this.title;
    }

    set setTitle(value) {
        if (value.includes('a')) console.log(`value ${value} include a`)
        this.title = value;
    };

    get setAuthor() {
        return this.author;
    };

    set setAuthor(value) {
        if (value.endsWith('st')) console.log(`value ${value} ends with st`);
        this.author = value;
    }

    get setYear() {
        return this.year;
    };

    set setYear(value) {
        if (isNaN(value)) console.log(`${value} in not a number`);
        this.year = value;
    }

    static oldestBook([...obj]) {
        let bookYears = [];
        for (let book of [...obj]) {
            bookYears.push(book.year)
        };
        const oldest = bookYears.reduce((a, b) => Math.min(a, b))
       return books.find(({ year }) => year === oldest)
    }
}

const book1 = new Book('Zapovit', 'Taras Shevchenko', 1864)
const book2 = new Book('Harry Potter', 'J.K. Rowling', 2010)

const callBook1 = book1.printInfo();
book2.printInfo()

book1.setTitle = "Kateryna"
book2.setTitle = "test"

book1.setAuthor = "Ivan Franko"
book2.setAuthor = "test"

book1.setYear = 2000
book2.setYear = 1976

book1.printInfo();
book2.printInfo()
import {ebook1} from './EBook.js'
let books = [book1, book2, ebook1];
const objOfOldestBook = Book.oldestBook(books);

console.log(objOfOldestBook)

