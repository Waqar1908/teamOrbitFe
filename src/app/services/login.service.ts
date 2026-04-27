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
      return this.api.post(API_CONFIG.AUTH.LOGIN, reqBody);
    }

    register(reqBody: any) {
      return this.api.post(API_CONFIG.AUTH.REGISTER, reqBody);
    }
}
