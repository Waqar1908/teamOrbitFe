import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;
  loginType: 'user' | 'admin' = 'user';

  constructor( private _loginService :LoginService){

  }
  ngOnInit(): void {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    const reqBody = {
      email: this.email,
      password: this.password
    };
    this._loginService.login(reqBody).subscribe({
      next: (res) => {
        console.log('Login success:', res);
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });
  }

  getSignUpInit(data: string) {
    this._loginService.updateUser(data);
  }
}
