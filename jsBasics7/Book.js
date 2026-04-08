class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // 🔹 getters
    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    
    set title(value) {
        if (!value || typeof value !== "string") {
            throw new Error("Назва має бути рядком");
        }
        this._title = value;
    }

    set author(value) {
        if (!value || typeof value !== "string") {
            throw new Error("Автор має бути рядком");
        }
        this._author = value;
    }

    set year(value) {
        if (typeof value !== "number" || value <= 0) {
            throw new Error("Рік має бути числом більше 0");
        }
        this._year = value;
    }

    
    printInfo() {
        console.log(`Книга: ${this.title}, Автор: ${this.author}, Рік: ${this.year}`);
    }

    
    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error("Передайте непорожній масив книг");
        }

        return books.reduce((oldest, current) =>
            current.year < oldest.year ? current : oldest
        );
    }
}

export default Book;