import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  imports: [CommonModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {

  menu = [
  { label: 'Profile', key: 'profile', icon: 'pi pi-user' },
  { label: 'Security', key: 'security', icon: 'pi pi-lock' },
  { label: 'Notifications', key: 'notifications', icon: 'pi pi-bell' }
];

activeTab = 'profile';
}
