import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { LoaderComponent } from "./component/loader/loader.component";
import { PcomponentComponent } from './component/pcomponent/pcomponent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule, CommonModule, LoaderComponent,PcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'teamOrbitfe';
  closeFn(){
    
  }
}
