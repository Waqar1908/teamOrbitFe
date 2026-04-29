import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  isCollapsed = false;
  menuItems = [
  {
    label: 'Dashboard',
    icon: 'pi pi-home',
    route: '/dashboard',
    exact: true
  },
  {
    label: 'Employee',
    icon: 'pi pi-users',
    route: '/dashboard/employees'
  },
  {
    label: 'Attendance',
    icon: 'pi pi-clock',
    route: '/dashboard/attendance'
  },
  {
    label: 'Company Detail',
    icon: 'pi pi-building',
    route: '/dashboard/company'
  },
  {
    label: 'Holiday',
    icon: 'pi pi-calendar',
    route: '/dashboard/holidays'
  },
  {
    label: 'Analysis',
    icon: 'pi pi-chart-line',
    route: '/dashboard/reports'
  },
  {
    label: 'Setting',
    icon: 'pi pi-cog',
    route: '/dashboard/settings'
  }
];

constructor( private router: Router) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  navigate(item: any) {
    console.log('Navigating to:', item.route);
    this.router.navigate([item.route]); 
  }

  logout(){
    sessionStorage.removeItem('token')
    window.location.reload();
  }

}
