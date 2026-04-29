import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../../../services/loader.service';
import { EmpService } from '../../../services/emp.service';
import { ToasterService } from '../../../services/toaster.service';
import { PmodelService } from '../../../services/pmodel.service';
import { DynamicFormComponent } from '../../../component/dynamic-form/dynamic-form.component';

interface Employee {
  name: string;
  department: string;
  id: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  joiningDate: string;
  avatar: string;
}

@Component({
  selector: 'app-employee',
  imports: [FormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit  {

  searchQuery = '';
  selectedStatus = 'All';
  selectedDepartment = 'All';

  page = 1;
  readonly pageSize = 10;

  readonly statusOptions = ['All', 'Active', 'Inactive'];
  readonly departmentOptions = ['All', 'Design', 'Development', 'Marketing', 'HR', 'Finance', 'Support'];

  employees: Employee[] = [
    { name: 'Priya Sharma',  department: 'Design',      id: 'EMP001', email: 'priya.sharma@teamorbit.com',  role: 'UI/UX Designer',      status: 'Active',   joiningDate: '15 Jan 2024', avatar: 'https://i.pravatar.cc/40?img=1'  },
    { name: 'Rahul Kumar',   department: 'Development', id: 'EMP002', email: 'rahul.kumar@teamorbit.com',   role: 'Frontend Developer',  status: 'Active',   joiningDate: '10 Feb 2024', avatar: 'https://i.pravatar.cc/40?img=11' },
    { name: 'Ananya Patel',  department: 'Marketing',   id: 'EMP003', email: 'ananya.patel@teamorbit.com',  role: 'Marketing Executive', status: 'Active',   joiningDate: '5 Mar 2024',  avatar: 'https://i.pravatar.cc/40?img=5'  },
    { name: 'Vikram Singh',  department: 'Development', id: 'EMP004', email: 'vikram.singh@teamorbit.com',  role: 'Backend Developer',   status: 'Inactive', joiningDate: '20 Dec 2023', avatar: 'https://i.pravatar.cc/40?img=12' },
    { name: 'Neha Gupta',    department: 'HR',          id: 'EMP005', email: 'neha.gupta@teamorbit.com',    role: 'HR Manager',          status: 'Active',   joiningDate: '1 Apr 2024',  avatar: 'https://i.pravatar.cc/40?img=9'  },
    { name: 'Arjun Mehta',   department: 'Finance',     id: 'EMP006', email: 'arjun.mehta@teamorbit.com',   role: 'Accountant',          status: 'Active',   joiningDate: '18 Mar 2024', avatar: 'https://i.pravatar.cc/40?img=13' },
    { name: 'Sneha Reddy',   department: 'Design',      id: 'EMP007', email: 'sneha.reddy@teamorbit.com',   role: 'Graphic Designer',    status: 'Inactive', joiningDate: '30 Nov 2023', avatar: 'https://i.pravatar.cc/40?img=16' },
    { name: 'Karan Joshi',   department: 'Support',     id: 'EMP008', email: 'karan.joshi@teamorbit.com',   role: 'Support Executive',   status: 'Active',   joiningDate: '12 Apr 2024', avatar: 'https://i.pravatar.cc/40?img=14' },
    { name: 'Riya Desai',    department: 'Development', id: 'EMP009', email: 'riya.desai@teamorbit.com',    role: 'Backend Developer',   status: 'Active',   joiningDate: '8 May 2024',  avatar: 'https://i.pravatar.cc/40?img=20' },
    { name: 'Mohit Sharma',  department: 'Marketing',   id: 'EMP010', email: 'mohit.sharma@teamorbit.com',  role: 'Marketing Executive', status: 'Active',   joiningDate: '22 Jan 2024', avatar: 'https://i.pravatar.cc/40?img=15' },
    { name: 'Deepak Verma',  department: 'Development', id: 'EMP011', email: 'deepak.verma@teamorbit.com',  role: 'Frontend Developer',  status: 'Active',   joiningDate: '14 Feb 2024', avatar: 'https://i.pravatar.cc/40?img=17' },
    { name: 'Kavita Nair',   department: 'HR',          id: 'EMP012', email: 'kavita.nair@teamorbit.com',   role: 'HR Executive',        status: 'Active',   joiningDate: '9 Mar 2024',  avatar: 'https://i.pravatar.cc/40?img=21' },
    { name: 'Suresh Pillai', department: 'Finance',     id: 'EMP013', email: 'suresh.pillai@teamorbit.com', role: 'Finance Manager',     status: 'Active',   joiningDate: '17 Jan 2024', avatar: 'https://i.pravatar.cc/40?img=18' },
    { name: 'Meera Iyer',    department: 'Design',      id: 'EMP014', email: 'meera.iyer@teamorbit.com',    role: 'UI Designer',         status: 'Inactive', joiningDate: '3 Oct 2023',  avatar: 'https://i.pravatar.cc/40?img=22' },
    { name: 'Rajesh Patel',  department: 'Support',     id: 'EMP015', email: 'rajesh.patel@teamorbit.com',  role: 'Support Lead',        status: 'Active',   joiningDate: '11 Jun 2024', avatar: 'https://i.pravatar.cc/40?img=19' },
    { name: 'Pooja Verma',   department: 'Marketing',   id: 'EMP016', email: 'pooja.verma@teamorbit.com',   role: 'Content Writer',      status: 'Active',   joiningDate: '5 Apr 2024',  avatar: 'https://i.pravatar.cc/40?img=23' },
  ];

  constructor( private _loaderService: LoaderService,
    private _empService: EmpService,
    private _toasterService: ToasterService,
    private _modalService: PmodelService
  ) {

  }



  get filteredEmployees(): Employee[] {
    const q = this.searchQuery.toLowerCase();
    return this.employees.filter(e => {
      const matchSearch = !q
        || e.name.toLowerCase().includes(q)
        || e.email.toLowerCase().includes(q)
        || e.id.toLowerCase().includes(q);
      const matchStatus = this.selectedStatus === 'All' || e.status === this.selectedStatus;
      const matchDept = this.selectedDepartment === 'All' || e.department === this.selectedDepartment;
      return matchSearch && matchStatus && matchDept;
    });
  }

  get pagedEmployees(): Employee[] {
    const start = (this.page - 1) * this.pageSize;
    return this.filteredEmployees.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredEmployees.length / this.pageSize) || 1;
  }

  ngOnInit(): void {
      this.getEmployee();
  }
  

  getPageRange(total: number): number[] {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    return [1, 2, 3, -1, total];
  }

  prevPage() { if (this.page > 1) this.page--; }
  nextPage() { if (this.page < this.totalPages) this.page++; }

  onFilterChange() { this.page = 1; }

  roleClass(role: string): string {
    const map: Record<string, string> = {
      'UI/UX Designer':      'bg-blue-100 text-blue-600',
      'Frontend Developer':  'bg-purple-100 text-purple-600',
      'Marketing Executive': 'bg-orange-100 text-orange-600',
      'Backend Developer':   'bg-teal-100 text-teal-600',
      'HR Manager':          'bg-pink-100 text-pink-600',
      'Accountant':          'bg-yellow-100 text-yellow-700',
      'Graphic Designer':    'bg-rose-100 text-rose-600',
      'Support Executive':   'bg-sky-100 text-sky-600',
      'HR Executive':        'bg-pink-100 text-pink-500',
      'Finance Manager':     'bg-amber-100 text-amber-700',
      'UI Designer':         'bg-blue-100 text-blue-500',
      'Support Lead':        'bg-sky-100 text-sky-700',
      'Content Writer':      'bg-violet-100 text-violet-600',
    };
    return map[role] ?? 'bg-gray-100 text-gray-600';
  }

  getEmployee(){

    this._empService.getAllEmp().subscribe({
      next:(res:any)=>{
        console.log('Employee List:', res);     
      },
      error:(err)=>{
        console.error('Error fetching employees:', err);
        this._toasterService.showError('Failed to load employees. Please try again later.');
      }
    })

  }

empFormEnable(){
    this._modalService.open(DynamicFormComponent, {
  title: ' ',
  width: '500px',
  data: {
    name: '',
    email: ''
  }
}).subscribe(res => {
  console.log('Form Result:', res);
});
console.log("test")

}
}
