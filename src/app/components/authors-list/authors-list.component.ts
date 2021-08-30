import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authors: Author[] = [];
  selectedAuthor: number = -1;

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorService
      .getAuthors()
      .subscribe(authors => {
        this.authors = authors; 
      });
  }

  selectAuthor(i: number) {
    this.selectedAuthor = i;
  }
}
