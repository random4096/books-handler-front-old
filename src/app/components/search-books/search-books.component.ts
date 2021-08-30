import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css'],
})
export class SearchBooksComponent implements OnInit {
  searchFieldValue: String = '';
  searchMode: String = 'title';
  @Input() requestOL: boolean = false;
  @Output() booksEvent = new EventEmitter<Book[]>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  search(): void {
    if (this.searchFieldValue.length < 3) return;

    switch (this.searchMode) {
      case 'title':
        this.bookService
          .searchBooksByTitle(this.searchFieldValue, this.requestOL)
          .subscribe(
            books => this.booksEvent.emit(books)
          );
        break;
      case 'isbn':
      case 'lccn':
        this.bookService
          .searchBookByBibKey(
            this.searchMode,
            this.searchFieldValue,
            this.requestOL
          )
          .subscribe(
            book => this.booksEvent.emit([book]),
            error => this.noBooksFound(error)
          );
        break;
    }
  }

  noBooksFound(error: any): void {
    console.error(error.error);
    this.booksEvent.emit([]);
  }
}
