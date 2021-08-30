import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book?: Book;
  @Output() saveBookEvent = new EventEmitter();
  @Output() updateBookEvent = new EventEmitter();
  onEditMode: boolean = false;
  showDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(): void {
    this.showDetails = !this.showDetails;
  }

  saveBook(): void {
    this.saveBookEvent.emit();
  }

  updateBook(): void {
    this.updateBookEvent.emit();
  }

  getBack(): void {
    if (this.book) {
      this.book.lendPersonName = "";
      this.book.lendDate = "";
      this.updateBookEvent.emit();    
    }
  }

}
