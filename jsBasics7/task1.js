import Book from "./Book.js";
import EBook from "./EBook.js";


const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("Лісова пісня", "Леся Українка", 1911);
const book3 = new Book("Тіні забутих предків", "Михайло Коцюбинський", 1911);
const book4 = new Book("Місто", "Валер’ян Підмогильний", 1928);
const book5 = new Book("Захар Беркут", "Іван Франко", 1883);


const ebook1 = new EBook("Тигролови", "Іван Багряний", 1944, "PDF");


book1.printInfo();
book2.printInfo();
book3.printInfo();
book4.printInfo();
book5.printInfo();
ebook1.printInfo();


book1.year = 1841;
console.log("Новий рік:", book1.year);


const books = [book1, book2, book3, book4, book5, ebook1];


const oldest = Book.findOldestBook(books);
console.log("Найдавніша книга:");
oldest.printInfo();

const ebookFromBook = EBook.fromBook(book2, "EPUB");
ebookFromBook.printInfo();