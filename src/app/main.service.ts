import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  deleteUsers(i: any): Observable<{}> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const deleteUrl = url + '/' + i;
    return this.http.delete(deleteUrl);
  }

  public postUsers(user: any): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.post<any>(url, user);
  }
}
