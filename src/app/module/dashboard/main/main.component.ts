import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, SideMenuComponent, DashboardHeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor( private _loaderService: LoaderService) {
    this._loaderService.hide();

  }

}
