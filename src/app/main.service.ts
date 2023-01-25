import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  postUsers() {
    return this.http.post('https://jsonplaceholder.typicode.com/users', {
      name: 'John Doe',
    });
  }
}
