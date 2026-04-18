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

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    // API integration placeholder
    console.log('Login:', { email: this.email, password: this.password, type: this.loginType });
  }
  getSignUpInit(data:string){
    this._loginService.updateUser(data);
    
  }
}
