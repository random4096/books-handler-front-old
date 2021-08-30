import { Component, OnInit, Input } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book, sortBy, filterBy } from '../../models/book';
import * as _ from 'lodash';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
})
export class BooksListComponent implements OnInit {
  _books: Book[] = [];
  printedBooks: Book[] = [];

  filters: string[] = [];
  sortedBy: string = "";
  order: 1 | -1 = 1;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  
  // Properties getters and setters 

  get books(): Book[] {
    return this.printedBooks;
  }

  @Input() set books(books: Book[]) {
    this._books = books;
    console.log(books)
    this.filter();
    this.sort();
  }

  sort(): void {
    sortBy(this.printedBooks, this.sortedBy, this.order);
  }

  filter(): void {
    this.printedBooks = filterBy(_.cloneDeep(this._books), this.filters);
  }


  // Event functions

  saveBook(index: number): void {
    console.log(this.printedBooks[index])
    this.bookService.saveBook(this.printedBooks[index]).subscribe((book) => {
      this.printedBooks[index] = book;
      for (let k = 0; k < this._books.length; k++) {
        const b = this._books[k];
        if (b.id === book.id || b.data.title === book.data.title) {
          this._books[k] = book;
          break;
        }
      }
    });
  }

  updateBook(index: number): void {
    this.bookService.updateBook(this.printedBooks[index]).subscribe((book) => {
      this.printedBooks[index] = book;
      for (let k = 0; k < this._books.length; k++) {
        const b = this._books[k];
        if (b.id === book.id || b.data.title === book.data.title) {
          this._books[k] = book;
          break;
        }
      }
    });
  }

  sortBy(prop:  string): void {
    if (this.sortedBy === prop) {
      this.order *= -1;
    }
    else {
      this.sortedBy = prop;
      this.order = 1;
    }
    this.sort();
  }

  updateFilter(filter: string): void {
    const i: number = this.filters.indexOf(filter);
    if (i === -1) this.filters.push(filter);
    else this.filters.splice(i, 1);
    this.filter();
    this.sort();
  }
}
