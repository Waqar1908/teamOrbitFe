import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { DashboardHeaderComponent } from "../dashboard-header/dashboard-header.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, SideMenuComponent, DashboardHeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
