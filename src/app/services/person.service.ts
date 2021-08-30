import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class PersonService {
    constructor(private http: HttpClient) { }

    all(): Observable<Person[]> {
        return this.http.get<Person[]>(`${environment.URI}persons`);
    }

    save(person: Person): Observable<Person> {
        return this.http.post<Person>(`${environment.URI}person`, person);
    }

    update(person: Person): Observable<Person> {
        return this.http.put<Person>(`${environment.URI}person`, person);
    }

    /*delete(person: Person): Observable<string> {
        return this.http.delete<string>(`${this.URI}person`, person);
    }*/
}