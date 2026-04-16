import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

  companyForm: FormGroup;
  isEdit = false;

  constructor(private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      code: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      website: [''],
      industry: [''],
      address: [''],
      city: [''],
      state: [''],
      country: [''],
      pincode: [''],

      totalEmployees: [''],
      established: [''],
      gst: [''],
      registration: [''],

      mission: [''],
      vision: [''],
      values: [''],

      adminName: [''],
      role: [''],
      adminEmail: ['', Validators.email],
      adminPhone: ['']
    });

    this.setInitialData();
  }

  setInitialData() {
    this.companyForm.patchValue({
      name: 'TeamOrbit Pvt. Ltd.',
      code: 'TOB-2024-001',
      email: 'contact@teamorbit.com',
      phone: '+91 98765 43210',
      website: 'www.teamorbit.com',
      industry: 'Technology',
      address: '123 Tech Park',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'India',
      pincode: '560066',

      totalEmployees: '1248',
      established: '15 Jan 2020',
      gst: '29ABCDE1234F1Z5',
      registration: 'U72200KA2020',

      mission: 'To simplify employee management.',
      vision: 'To be the most trusted HR platform.',
      values: 'Integrity, Innovation, Teamwork.',

      adminName: 'John Doe',
      role: 'Super Admin',
      adminEmail: 'admin@teamorbit.com',
      adminPhone: '+91 98765 43210'
    });
  }

  toggleEdit() {
    if (this.isEdit) {
      this.onSubmit();
    }
    this.isEdit = !this.isEdit;
  }

  onSubmit() {
    if (this.companyForm.valid) {
      console.log(this.companyForm.value);
    } else {
      this.companyForm.markAllAsTouched();
    }
  }

  companyInfo = [
    { key: 'address', label: 'Address', icon: '📍' },
    { key: 'city', label: 'City', icon: '🏙️' },
    { key: 'state', label: 'State', icon: '🗺️' },
    { key: 'country', label: 'Country', icon: '🌍' },
    { key: 'pincode', label: 'Pincode', icon: '📮' }
  ];

  overviewInfo = [
    { key: 'totalEmployees', label: 'Total Employees', icon: '👥' },
    { key: 'industry', label: 'Industry', icon: '🏢' },
    { key: 'established', label: 'Established', icon: '📅' },
    { key: 'gst', label: 'GST Number', icon: '🧾' },
    { key: 'registration', label: 'Registration', icon: '📄' }
  ];

  adminInfo = [
    { key: 'adminName', label: 'Admin Name' },
    { key: 'role', label: 'Role' },
    { key: 'adminEmail', label: 'Email' },
    { key: 'adminPhone', label: 'Phone' }
  ];

  additionalInfo = [
    { key: 'mission', label: 'Our Mission' },
    { key: 'vision', label: 'Our Vision' },
    { key: 'values', label: 'Our Values' }
  ];

}