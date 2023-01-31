import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './common';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`${environment.baseURL}`);
  }
  deleteUsers(id: any): Observable<{}> {
    return this.http.delete(`${environment.baseURL}/${id}`);
  }
  postUsers(user: any): Observable<any> {
    return this.http.post<any>(`${environment.baseURL}`, user);
  }
  putUsers(user: any): Observable<any> {
    return this.http.put<any>(`${environment.baseURL}/${user.id}`, user);
  }
  patchUsers(user: any): Observable<any> {
    return this.http.patch<any>(`${environment.baseURL}/${user.id}`, user);
  }
  get accessToken() {
    return localStorage.getItem('token') || null;
  }
}
