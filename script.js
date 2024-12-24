class LibraryItem {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    getDetails() {
        console.log(`Title of the item is ${this.title}, it's written by ${this.author}, it's published in ${this.publishedYear}`);
    }
}

const item = new LibraryItem("Momo", "Michael Ende", 1973)
item.getDetails();

class Book extends LibraryItem{
    constructor(title, author, publishedYear, genre){
        super(title, author, publishedYear);
        this.genre = genre;
    }

    BookDetails () {
        console.log(`Title of the item is ${this.title}, it's written by ${this.author}, it's published in ${this.publishedYear}, its genre is ${this.genre}`);
    }
}

const BookInfo = new Book ("Momo", "Michael Ende", 1973, "fiction")
BookInfo.BookDetails();


class Magazine extends LibraryItem {
    constructor(issueNumber) {
        super();
        this.issueNumber = issueNumber;
}
    MagazineDetails() {
        console.log(`Issue number of the magazine is ${this.issueNumber}`);
    }
}

const magazineInfo = new Magazine(12);
magazineInfo.MagazineDetails();