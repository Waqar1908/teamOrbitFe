import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private isSignUp = new BehaviorSubject<string>('Login');
  isSignUpEnable$ = this.isSignUp.asObservable();

  updateUser(value: string) {
    this.isSignUp.next(value);
  }
}
