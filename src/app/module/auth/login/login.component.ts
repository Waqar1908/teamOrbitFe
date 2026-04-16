import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    // API integration placeholder
    console.log('Login:', { email: this.email, password: this.password, type: this.loginType });
  }
}
