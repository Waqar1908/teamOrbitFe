import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  @Input() fullscreen = true;
  loader$: any;

  constructor( private loaderService: LoaderService){
  this.loader$ = this.loaderService.getLoder();

  }

}
