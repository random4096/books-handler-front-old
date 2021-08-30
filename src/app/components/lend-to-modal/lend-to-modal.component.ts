import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Person } from '../../models/person';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonService } from '../../services/person.service';
import { BookService } from '../../services/book.service';
@Component({
  selector: 'app-lend-to-modal',
  templateUrl: './lend-to-modal.component.html',
  styleUrls: ['./lend-to-modal.component.css'],
})
export class LendToModalComponent implements OnInit {
  @Input() book?: Book;
  persons: Person[] = [];
  selectedPerson?: Person;

  newPersonName: string = '';

  constructor(
    private personService: PersonService,
    private bookService: BookService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  addPerson(): void {
    if (this.newPersonName === '') return;

    this.personService
      .save({ name: this.newPersonName })
      .subscribe((newPerson) => this.persons.push(newPerson));
  }

  openLendModal(content: any): void {
    this.personService.all().subscribe((persons) => {
      this.persons = persons;
    });

    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(() => {
        if (this.book && this.selectedPerson) {
          this.book.lendPersonName = this.selectedPerson.name;
          this.book.lendDate = new Date().toLocaleString();
          this.bookService.updateBook(this.book).subscribe();
        }
      });
  }
}
