import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from "../signup/signup.component";

@Component({
  selector: 'app-auth',
  imports: [LoginComponent, SignupComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  isLogin=true

}
