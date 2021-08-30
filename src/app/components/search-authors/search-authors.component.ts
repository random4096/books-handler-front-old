import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-search-authors',
  templateUrl: './search-authors.component.html',
  styleUrls: ['./search-authors.component.css']
})
export class SearchAuthorsComponent implements OnInit {
  searchFieldValue: String = "";
  authors?: Author[];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
  }

  search(): void {
    if (this.searchFieldValue.length < 3) return;

    this.authorService
      .searchAuthorsByName(this.searchFieldValue)
      .subscribe(authors => {
        this.authors = authors;
      });
  }

  saveAuthor(author: Author): void {
    this.authorService
      .saveAuthor(author.key)
      .subscribe(() => {
        const index = this.authors?.indexOf(author);
        if (index && this.authors) {
          this.authors[index].saved = true;
        }
      });
  }

}
