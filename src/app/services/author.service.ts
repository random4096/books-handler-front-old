import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  URI: String = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.URI}authors`);
  }

  getAuthor(key: string): Observable<Author | undefined> {
    return this.http.get<Author>(`${this.URI}author?key=${key}`);
  }

  saveAuthor(key: string): Observable<Author> {
    return this.http.post<Author>(`${this.URI}author?key=${key}`, {});
  }

  searchAuthorsByName(name: String): Observable<Author[]> {
    return this.http.get<Author[]>(`${this.URI}search/authors?name=${name}`);
  }

  updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(`${this.URI}author`, author);
  }
}
