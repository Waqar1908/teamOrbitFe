import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  togglePassword() { this.showPassword = !this.showPassword; }
  toggleConfirm()  { this.showConfirm  = !this.showConfirm;  }

  get passwordMatch(): boolean {
    return this.password.length > 0 && this.password === this.confirmPassword;
  }

  onRegister() {
    // API integration placeholder
    console.log('Admin Register:', {
      fullName: this.fullName,
      email: this.email,
      companyName: this.companyName,
      phone: this.phone
    });
  }
}
