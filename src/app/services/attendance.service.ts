import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// To integrate with real API, uncomment these and replace of() below:
// import { ApiService } from './api.service';
// import { API_CONFIG } from '../constants/api.config';

export interface AttendanceRecord {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  date: string;
  checkIn: string;
  checkOut: string;
  totalHours: string;
  status: 'Present' | 'Absent' | 'Late' | 'Half Day';
  note: string;
}

export interface LeaveRequest {
  id: string;
  name: string;
  role: string;
  avatar: string;
  leaveType: 'Casual Leave' | 'Sick Leave' | 'Earned Leave';
  fromDate: string;
  toDate: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

@Injectable({ providedIn: 'root' })
export class AttendanceService {
  // constructor(private api: ApiService) {}

  private readonly records: AttendanceRecord[] = [
    { id: 'ATT001', employeeId: 'EMP001', name: 'Priya Sharma',  role: 'UI/UX Designer',      department: 'Design',      avatar: 'https://i.pravatar.cc/40?img=1',  date: '22 Apr 2026', checkIn: '09:02 AM', checkOut: '06:15 PM', totalHours: '9h 13m', status: 'Present',  note: '-' },
    { id: 'ATT002', employeeId: 'EMP002', name: 'Rahul Kumar',   role: 'Frontend Developer',  department: 'Development', avatar: 'https://i.pravatar.cc/40?img=11', date: '22 Apr 2026', checkIn: '09:15 AM', checkOut: '06:05 PM', totalHours: '8h 50m', status: 'Present',  note: '-' },
    { id: 'ATT003', employeeId: 'EMP003', name: 'Ananya Patel',  role: 'Marketing Executive', department: 'Marketing',   avatar: 'https://i.pravatar.cc/40?img=5',  date: '22 Apr 2026', checkIn: '09:45 AM', checkOut: '06:20 PM', totalHours: '8h 35m', status: 'Late',     note: 'Checked in 45m late' },
    { id: 'ATT004', employeeId: 'EMP004', name: 'Vikram Singh',  role: 'Backend Developer',   department: 'Development', avatar: 'https://i.pravatar.cc/40?img=12', date: '22 Apr 2026', checkIn: '-',        checkOut: '-',        totalHours: '0h 0m',  status: 'Absent',   note: 'No check-in' },
    { id: 'ATT005', employeeId: 'EMP005', name: 'Neha Gupta',    role: 'HR Manager',          department: 'HR',          avatar: 'https://i.pravatar.cc/40?img=9',  date: '22 Apr 2026', checkIn: '08:55 AM', checkOut: '05:30 PM', totalHours: '8h 35m', status: 'Present',  note: '-' },
    { id: 'ATT006', employeeId: 'EMP006', name: 'Arjun Mehta',   role: 'Finance Analyst',     department: 'Finance',     avatar: 'https://i.pravatar.cc/40?img=13', date: '22 Apr 2026', checkIn: '09:05 AM', checkOut: '06:20 PM', totalHours: '9h 15m', status: 'Present',  note: '-' },
    { id: 'ATT007', employeeId: 'EMP007', name: 'Sneha Reddy',   role: 'Graphic Designer',    department: 'Design',      avatar: 'https://i.pravatar.cc/40?img=16', date: '22 Apr 2026', checkIn: '09:00 AM', checkOut: '01:00 PM', totalHours: '4h 00m', status: 'Half Day', note: 'Half day' },
    { id: 'ATT008', employeeId: 'EMP008', name: 'Karan Joshi',   role: 'Support Executive',   department: 'Support',     avatar: 'https://i.pravatar.cc/40?img=14', date: '22 Apr 2026', checkIn: '09:00 AM', checkOut: '06:00 PM', totalHours: '9h 00m', status: 'Present',  note: '-' },
    { id: 'ATT009', employeeId: 'EMP009', name: 'Riya Desai',    role: 'Backend Developer',   department: 'Development', avatar: 'https://i.pravatar.cc/40?img=20', date: '22 Apr 2026', checkIn: '10:15 AM', checkOut: '06:45 PM', totalHours: '8h 30m', status: 'Late',     note: 'Checked in 75m late' },
    { id: 'ATT010', employeeId: 'EMP010', name: 'Mohit Sharma',  role: 'Marketing Manager',   department: 'Marketing',   avatar: 'https://i.pravatar.cc/40?img=15', date: '22 Apr 2026', checkIn: '08:50 AM', checkOut: '06:15 PM', totalHours: '9h 25m', status: 'Present',  note: '-' },
    { id: 'ATT011', employeeId: 'EMP011', name: 'Deepak Verma',  role: 'Full Stack Developer',department: 'Development', avatar: 'https://i.pravatar.cc/40?img=17', date: '22 Apr 2026', checkIn: '09:00 AM', checkOut: '06:00 PM', totalHours: '9h 00m', status: 'Present',  note: '-' },
    { id: 'ATT012', employeeId: 'EMP012', name: 'Kavita Nair',   role: 'HR Executive',        department: 'HR',          avatar: 'https://i.pravatar.cc/40?img=21', date: '22 Apr 2026', checkIn: '-',        checkOut: '-',        totalHours: '0h 0m',  status: 'Absent',   note: 'No check-in' },
    { id: 'ATT013', employeeId: 'EMP013', name: 'Suresh Pillai', role: 'Finance Manager',     department: 'Finance',     avatar: 'https://i.pravatar.cc/40?img=18', date: '22 Apr 2026', checkIn: '09:10 AM', checkOut: '06:30 PM', totalHours: '9h 20m', status: 'Present',  note: '-' },
    { id: 'ATT014', employeeId: 'EMP014', name: 'Meera Iyer',    role: 'UI Designer',         department: 'Design',      avatar: 'https://i.pravatar.cc/40?img=22', date: '22 Apr 2026', checkIn: '10:45 AM', checkOut: '06:30 PM', totalHours: '7h 45m', status: 'Late',     note: 'Checked in 105m late' },
    { id: 'ATT015', employeeId: 'EMP015', name: 'Rajesh Patel',  role: 'Support Lead',        department: 'Support',     avatar: 'https://i.pravatar.cc/40?img=19', date: '22 Apr 2026', checkIn: '08:45 AM', checkOut: '06:00 PM', totalHours: '9h 15m', status: 'Present',  note: '-' },
    { id: 'ATT016', employeeId: 'EMP016', name: 'Pooja Sharma',  role: 'Content Writer',      department: 'Marketing',   avatar: 'https://i.pravatar.cc/40?img=23', date: '22 Apr 2026', checkIn: '09:00 AM', checkOut: '01:15 PM', totalHours: '4h 15m', status: 'Half Day', note: 'Half day' },
    { id: 'ATT017', employeeId: 'EMP017', name: 'Amit Gupta',    role: 'DevOps Engineer',     department: 'Development', avatar: 'https://i.pravatar.cc/40?img=24', date: '22 Apr 2026', checkIn: '09:05 AM', checkOut: '06:20 PM', totalHours: '9h 15m', status: 'Present',  note: '-' },
    { id: 'ATT018', employeeId: 'EMP018', name: 'Sunita Rao',    role: 'HR Coordinator',      department: 'HR',          avatar: 'https://i.pravatar.cc/40?img=25', date: '22 Apr 2026', checkIn: '09:00 AM', checkOut: '06:05 PM', totalHours: '9h 05m', status: 'Present',  note: '-' },
    { id: 'ATT019', employeeId: 'EMP019', name: 'Vinod Kumar',   role: 'Accountant',          department: 'Finance',     avatar: 'https://i.pravatar.cc/40?img=26', date: '22 Apr 2026', checkIn: '-',        checkOut: '-',        totalHours: '0h 0m',  status: 'Absent',   note: 'No check-in' },
    { id: 'ATT020', employeeId: 'EMP020', name: 'Preethi Menon', role: 'Product Designer',    department: 'Design',      avatar: 'https://i.pravatar.cc/40?img=27', date: '22 Apr 2026', checkIn: '09:30 AM', checkOut: '06:45 PM', totalHours: '9h 15m', status: 'Late',     note: 'Checked in 30m late' },
  ];

  private readonly leaveData: LeaveRequest[] = [
    { id: 'LR001', name: 'Arjun Mehta',   role: 'Finance',           avatar: 'https://i.pravatar.cc/40?img=13', leaveType: 'Casual Leave', fromDate: 'Jun 12, 2024', toDate: 'Jun 13, 2024', reason: 'Personal work',       status: 'Pending'  },
    { id: 'LR002', name: 'Sneha Reddy',   role: 'Graphic Designer',  avatar: 'https://i.pravatar.cc/40?img=16', leaveType: 'Sick Leave',   fromDate: 'Jun 10, 2024', toDate: 'Jun 12, 2024', reason: 'Medical treatment',   status: 'Approved' },
    { id: 'LR003', name: 'Karan Joshi',   role: 'Support Executive', avatar: 'https://i.pravatar.cc/40?img=14', leaveType: 'Casual Leave', fromDate: 'Jun 15, 2024', toDate: 'Jun 16, 2024', reason: 'Family function',     status: 'Pending'  },
    { id: 'LR004', name: 'Pooja Verma',   role: 'Content Writer',    avatar: 'https://i.pravatar.cc/40?img=22', leaveType: 'Sick Leave',   fromDate: 'Jun 05, 2024', toDate: 'Jun 07, 2024', reason: 'Fever and rest',      status: 'Rejected' },
    { id: 'LR005', name: 'Manish Yadav',  role: 'Sales Executive',   avatar: 'https://i.pravatar.cc/40?img=17', leaveType: 'Earned Leave', fromDate: 'Jun 20, 2024', toDate: 'Jun 25, 2024', reason: 'Vacation',            status: 'Approved' },
    { id: 'LR006', name: 'Priya Sharma',  role: 'UI/UX Designer',    avatar: 'https://i.pravatar.cc/40?img=1',  leaveType: 'Sick Leave',   fromDate: 'Jun 08, 2024', toDate: 'Jun 09, 2024', reason: 'Medical appointment', status: 'Approved' },
    { id: 'LR007', name: 'Rahul Kumar',   role: 'Frontend Developer',avatar: 'https://i.pravatar.cc/40?img=11', leaveType: 'Casual Leave', fromDate: 'Jun 18, 2024', toDate: 'Jun 18, 2024', reason: 'Personal work',       status: 'Pending'  },
    { id: 'LR008', name: 'Ananya Patel',  role: 'Marketing Exec',    avatar: 'https://i.pravatar.cc/40?img=5',  leaveType: 'Earned Leave', fromDate: 'Jun 22, 2024', toDate: 'Jun 23, 2024', reason: 'Travel',              status: 'Rejected' },
    { id: 'LR009', name: 'Vikram Singh',  role: 'Backend Developer', avatar: 'https://i.pravatar.cc/40?img=12', leaveType: 'Sick Leave',   fromDate: 'Jun 19, 2024', toDate: 'Jun 21, 2024', reason: 'Flu',                 status: 'Approved' },
    { id: 'LR010', name: 'Neha Gupta',    role: 'HR Manager',        avatar: 'https://i.pravatar.cc/40?img=9',  leaveType: 'Casual Leave', fromDate: 'Jun 24, 2024', toDate: 'Jun 24, 2024', reason: 'Personal work',       status: 'Pending'  },
    { id: 'LR011', name: 'Deepak Verma',  role: 'Developer',         avatar: 'https://i.pravatar.cc/40?img=17', leaveType: 'Earned Leave', fromDate: 'Jun 26, 2024', toDate: 'Jun 28, 2024', reason: 'Family trip',         status: 'Approved' },
    { id: 'LR012', name: 'Kavita Nair',   role: 'HR Executive',      avatar: 'https://i.pravatar.cc/40?img=21', leaveType: 'Sick Leave',   fromDate: 'Jun 27, 2024', toDate: 'Jun 28, 2024', reason: 'Medical leave',       status: 'Pending'  },
  ];

  getAttendance(): Observable<AttendanceRecord[]> {
    // Replace with API call when backend endpoint is ready:
    // return this.api.get<AttendanceRecord[]>(API_CONFIG.ATTENDANCE.GET_ALL);
    return of(this.records);
  }

  getLeaveRequests(): Observable<LeaveRequest[]> {
    // Replace with API call when backend endpoint is ready:
    // return this.api.get<LeaveRequest[]>(API_CONFIG.ATTENDANCE.GET_LEAVE_REQUESTS);
    return of(this.leaveData);
  }
}
