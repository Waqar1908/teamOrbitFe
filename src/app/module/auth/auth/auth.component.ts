import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from "../signup/signup.component";
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  isLogin=true
  constructor(private login:LoginService) {
    this.login.isSignUpEnable$.subscribe((value)=>{
      this.isLogin=value==='Login'?true:false
    })

    
  }

}
