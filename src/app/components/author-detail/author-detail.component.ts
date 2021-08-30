import { Component, Input, OnInit } from '@angular/core';

import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author?: Author;

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit() {
  }
/*
  removeBook(index: number) {
    this.author?.books.splice(index, 1);

    this.authorService
      .updateAuthor(this.author as Author)
      .subscribe(author => {
        this.author = author;
      });
  }*/
}
