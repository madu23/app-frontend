import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../models/user-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<UserData>;
  public currentUser: Observable<UserData>;
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UserData>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get CurrentUserValue() {
    return this.currentUserSubject.value ?? JSON.parse(localStorage.getItem('currentUser'));
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}api/account/login`, {username, password});
  }

  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
}
