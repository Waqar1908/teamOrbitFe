import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { API_CONFIG } from '../constants/api.config';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) { }

  private isSignUp = new BehaviorSubject<string>('Login');
  isSignUpEnable$ = this.isSignUp.asObservable();

  updateUser(value: string) {
    this.isSignUp.next(value);
  }

  login(reqBody: any) {
    return this.api.post(API_CONFIG.AUTH.LOGIN, reqBody)
  }

  signup(reqBody: any) {
    return this.api.post(API_CONFIG.AUTH.SIGNUP, reqBody)
  }

  logout(): void {
    sessionStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
}
