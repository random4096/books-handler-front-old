import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.URI}books`);
  }

  saveBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${environment.URI}book`, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${environment.URI}book`, book);
  }

  searchBooksByTitle(title: String, requestOL: boolean): Observable<Book[]> {
    return this.http.get<Book[]>(
      `${environment.URI}book/title?title=${title}&requestOL=${requestOL}`
    );
  }

  searchBookByBibKey(
    bibkey: String,
    value: String,
    requestOL: boolean
  ): Observable<Book> {
    return this.http.get<Book>(
      `${environment.URI}book/bibkey?bibkey=${bibkey}&value=${value}&requestOL=${requestOL}`
    );
  }
}
