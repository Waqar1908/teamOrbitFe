import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fullName = '';
  email = '';
  companyName = '';
  phone = '';
  password = '';
  confirmPassword = '';
  agreeTerms = false;
  showPassword = false;
  showConfirm = false;
  constructor(private _loginService: LoginService) {}

  togglePassword() { this.showPassword = !this.showPassword; }
  toggleConfirm()  { this.showConfirm  = !this.showConfirm;  }

  get passwordMatch(): boolean {
    return this.password.length > 0 && this.password === this.confirmPassword;
  }

  onRegister() {
    const reqBody = {
      fullName: this.fullName,
      email: this.email,
      companyName: this.companyName,
      phone: this.phone,
      password: this.password
    };
    this._loginService.register(reqBody).subscribe({
      next: (res) => {
        console.log('Register success:', res);
      },
      error: (err) => {
        console.error('Register failed:', err);
      }
    });
  }
  getLoginInit(data:string){
    this._loginService.updateUser(data);

  }
}
