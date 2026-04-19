
import Book from "./Book.js";

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    
    get format() {
        return this._format;
    }

    
    set format(value) {
        if (!value || typeof value !== "string") {
            throw new Error("Формат має бути рядком");
        }
        this._format = value;
    }

    
    printInfo() {
        console.log(
            `EBook: ${this.title}, Автор: ${this.author}, Рік: ${this.year}, Формат: ${this.format}`
        );
    }

    
    static fromBook(book, format) {
        if (!(book instanceof Book)) {
            throw new Error("Потрібен екземпляр Book");
        }

        if (!format || typeof format !== "string") {
            throw new Error("Формат має бути рядком");
        }

        return new EBook(book.title, book.author, book.year, format);
    }
}

export default EBook;