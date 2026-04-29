import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/login.service';
import { ToasterService } from '../../../services/toaster.service';
import { ToastModule } from 'primeng/toast';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule, ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;
  loginType: 'user' | 'admin' = 'user';
  loginForm!: FormGroup;

  constructor(private _loginService: LoginService,
    private _toasterService: ToasterService,
    private router: Router,
    private _loaderService: LoaderService,
    private fb: FormBuilder) {
    this.formInit()
  }

  ngOnInit(): void {
  }

  formInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  getSignUpInit(data: string) {
    this._loginService.updateUser(data);

  }

  onLogin() {
    // const reqBody={
    //   email:'team@gmail.com',
    //   password:'123456'
    // }
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this._loaderService.show()

    const reqBody = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this._loginService.login(reqBody).subscribe({
      next: (res: any) => {
        console.log('Login success:', res);
        this._toasterService.showSuccess(res.message);
        if (res.success == true) {
          sessionStorage.setItem('token', res.data.token);
          sessionStorage.setItem('user', JSON.stringify(res.data.company));
          this.router.navigate(['/dashboard'])
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
        this._toasterService.showError(err.error.message || 'Login failed. Please try again.');
        this._loaderService.hide();
      },

    });
  }


}
