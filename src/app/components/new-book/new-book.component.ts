import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent implements OnInit {
  @Input() book: Book = {
    read: false,
    owned: false,
    data: {
      title: '',
      number_of_pages: 0,
      publish_date: '',
    },
  };
  @Output() saveBookEvent = new EventEmitter();
  isCollapsed: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  save(): void {
    if (!this.book.data.title.length) return;

    console.log(this.book);
    this.saveBookEvent.emit(this.book);
  }
}
