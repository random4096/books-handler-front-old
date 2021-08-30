import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms'; // for NgModel
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';
import { SearchAuthorsComponent } from './components/search-authors/search-authors.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LendToModalComponent } from './components/lend-to-modal/lend-to-modal.component';
import { NewBookComponent } from './components/new-book/new-book.component';

@NgModule({
  declarations: [AppComponent, AuthorsListComponent, AuthorDetailComponent, SearchAuthorsComponent, TopBarComponent, BooksListComponent, BookDetailComponent, SearchBooksComponent, BooksPageComponent, LendToModalComponent, NewBookComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
