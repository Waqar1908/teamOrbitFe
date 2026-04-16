import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-employee',
  imports: [FormsModule,CommonModule, TableModule,
      ButtonModule,
      DropdownModule,
    CheckboxModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {


  statuses = [
    { label: 'All', value: null },
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' }
  ];

  departments = [
    { label: 'All', value: null },
    { label: 'Design', value: 'Design' },
    { label: 'Development', value: 'Development' },
    { label: 'Marketing', value: 'Marketing' }
  ];

  employees = [
    {
      name: 'Priya Sharma',
      department: 'Design',
      id: 'EMP001',
      email: 'priya@company.com',
      role: 'UI/UX Designer',
      status: 'Active',
      joiningDate: '15 Jan 2024',
      avatar: 'https://i.pravatar.cc/40?img=1'
    },
    {
      name: 'Rahul Kumar',
      department: 'Development',
      id: 'EMP002',
      email: 'rahul@company.com',
      role: 'Frontend Developer',
      status: 'Active',
      joiningDate: '10 Feb 2024',
      avatar: 'https://i.pravatar.cc/40?img=2'
    }
  ];

  roleClass(role: string) {
    switch (role) {
      case 'UI/UX Designer':
        return 'bg-blue-100 text-blue-600';
      case 'Frontend Developer':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }
}
