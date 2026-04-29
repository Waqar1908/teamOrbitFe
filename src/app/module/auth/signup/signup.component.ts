import { Component, OnInit } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/login.service';
import { SignupRequest } from '../../../model/signup.model';
import { LoaderService } from '../../../services/loader.service';
import { ToasterService } from '../../../services/toaster.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  fullName = '';
  email = '';
  companyName = '';
  phone = '';
  password = '';
  confirmPassword = '';
  agreeTerms = false;
  showPassword = false;
  showConfirm = false;
  form: any
  requestBody!: SignupRequest
  constructor(private _loginService: LoginService,
    private fb: FormBuilder,
    private _loaderService: LoaderService,
    private _toasterService: ToasterService
  ) { }


  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.form = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      agreeTerms: [true, [Validators.requiredTrue]]
    }, { validators: this.passwordMatchValidator });
  }

  togglePassword() { this.showPassword = !this.showPassword; }
  toggleConfirm() { this.showConfirm = !this.showConfirm; }

  get passwordMatch(): boolean {
    return this.password.length > 0 && this.password === this.confirmPassword;
  }
  passwordMatchValidator(control: any) {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;

    return password === confirm ? null : { mismatch: true };
  }

  onRegister() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this._loaderService.show();
    this.requestBody = {
      name: this.form.value.fullName,
      email: this.form.value.email,
      password: this.form.value.password,
      team_size: 10
    }
    this._loginService.signup(this.requestBody).subscribe({
      next: (res: any) => {
        if (res.success == true) {
          this.form.reset();
        }
        this._toasterService.showSuccess(res.message);
        this.getLoginInit('Login')
        this._loaderService.hide();

      },
      error: (err: any) => {
        console.error('Signup error:', err);
        this._loaderService.hide();
      }
    })


  }
  getLoginInit(data: string) {
    this._loginService.updateUser(data);

  }
}
