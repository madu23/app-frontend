import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserSubject: BehaviorSubject<any>;
  constructor() {
    this.currentUserSubject = new BehaviorSubject<any>({});
  }

  public set SetCurrentUser(value: any) {
    this.currentUserSubject = value;
  }

  public get GetCurrentUser() {
    return this.currentUserSubject;
  }
}
