import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AttendanceService, AttendanceRecord, LeaveRequest } from '../../../services/attendance.service';

@Component({
  selector: 'app-attendance',
  imports: [FormsModule, CommonModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit {

  activeTab: 'attendance' | 'leave' = 'attendance';

  attendance: AttendanceRecord[] = [];
  attendancePage = 1;
  readonly attendancePageSize = 5;

  leaveRequests: LeaveRequest[] = [];
  leaveFilter: 'All' | 'Pending' | 'Approved' | 'Rejected' = 'All';
  leavePage = 1;
  readonly leavePageSize = 5;
  readonly leaveFilters = ['All', 'Pending', 'Approved', 'Rejected'];

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit() {
    this.attendanceService.getAttendance().subscribe(data => {
      this.attendance = data;
    });
    this.attendanceService.getLeaveRequests().subscribe(data => {
      this.leaveRequests = data;
    });
  }

  // ── Stats ────────────────────────────────────────────────────────────────
  get totalPresent(): number  { return this.attendance.filter(r => r.status === 'Present').length; }
  get totalAbsent(): number   { return this.attendance.filter(r => r.status === 'Absent').length; }
  get totalLate(): number     { return this.attendance.filter(r => r.status === 'Late').length; }

  get avgWorkHours(): string {
    const valid = this.attendance.filter(r => r.totalHours !== '-' && r.totalHours !== '0h 0m');
    if (!valid.length) return '0h 0m';
    const totalMins = valid.reduce((sum, r) => {
      const m = r.totalHours.match(/(\d+)h\s*(\d+)m/);
      return m ? sum + parseInt(m[1]) * 60 + parseInt(m[2]) : sum;
    }, 0);
    const avg = Math.round(totalMins / valid.length);
    return `${Math.floor(avg / 60)}h ${String(avg % 60).padStart(2, '0')}m`;
  }

  // ── Attendance pagination ─────────────────────────────────────────────────
  get pagedAttendance(): AttendanceRecord[] {
    const start = (this.attendancePage - 1) * this.attendancePageSize;
    return this.attendance.slice(start, start + this.attendancePageSize);
  }
  get totalAttendancePages(): number {
    return Math.ceil(this.attendance.length / this.attendancePageSize);
  }
  attendancePrev() { if (this.attendancePage > 1) this.attendancePage--; }
  attendanceNext() { if (this.attendancePage < this.totalAttendancePages) this.attendancePage++; }

  // ── Leave filter & pagination ─────────────────────────────────────────────
  get filteredLeave(): LeaveRequest[] {
    if (this.leaveFilter === 'All') return this.leaveRequests;
    return this.leaveRequests.filter(r => r.status === this.leaveFilter);
  }
  get pagedLeave(): LeaveRequest[] {
    const start = (this.leavePage - 1) * this.leavePageSize;
    return this.filteredLeave.slice(start, start + this.leavePageSize);
  }
  get totalLeavePages(): number {
    return Math.ceil(this.filteredLeave.length / this.leavePageSize);
  }
  setLeaveFilter(f: string) {
    this.leaveFilter = f as 'All' | 'Pending' | 'Approved' | 'Rejected';
    this.leavePage = 1;
  }
  leaveCount(status: string): number {
    if (status === 'All') return this.leaveRequests.length;
    return this.leaveRequests.filter(r => r.status === status).length;
  }
  leavePrev() { if (this.leavePage > 1) this.leavePage--; }
  leaveNext() { if (this.leavePage < this.totalLeavePages) this.leavePage++; }

  // ── Pagination helper ────────────────────────────────────────────────────
  getPageRange(total: number, _current: number): number[] {
    if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: number[] = [1, 2, 3, -1, total]; // -1 = ellipsis
    return pages;
  }

  // ── CSS helpers ──────────────────────────────────────────────────────────
  statusBadgeClass(status: string): string {
    const map: Record<string, string> = {
      'Present':  'bg-green-50 text-green-600',
      'Absent':   'bg-red-50 text-red-500',
      'Late':     'bg-orange-50 text-orange-500',
      'Half Day': 'bg-blue-50 text-blue-500',
    };
    return map[status] ?? 'bg-gray-50 text-gray-600';
  }

  statusDotClass(status: string): string {
    const map: Record<string, string> = {
      'Present':  'bg-green-500',
      'Absent':   'bg-red-500',
      'Late':     'bg-orange-400',
      'Half Day': 'bg-blue-500',
    };
    return map[status] ?? 'bg-gray-400';
  }

  leaveTypeBadgeClass(type: string): string {
    const map: Record<string, string> = {
      'Casual Leave': 'bg-orange-100 text-orange-600',
      'Sick Leave':   'bg-pink-100 text-pink-600',
      'Earned Leave': 'bg-green-100 text-green-600',
    };
    return map[type] ?? 'bg-gray-100 text-gray-600';
  }

  leaveStatusClass(status: string): string {
    const map: Record<string, string> = {
      'Pending':  'text-orange-500',
      'Approved': 'text-green-600',
      'Rejected': 'text-red-500',
    };
    return map[status] ?? 'text-gray-600';
  }

  leaveStatusIcon(status: string): string {
    const map: Record<string, string> = {
      'Pending':  'pi-clock',
      'Approved': 'pi-check-circle',
      'Rejected': 'pi-times-circle',
    };
    return map[status] ?? '';
  }
}
