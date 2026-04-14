import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule, DatePipe } from '@angular/common';

interface Holiday {
  id: number;
  occasion: string;
  date: string;
}

@Component({
  selector: 'app-holiday',
  standalone: true, // ✅ IMPORTANT for Angular 19
  imports: [CommonModule, TableModule, ButtonModule, DatePipe],
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss'] // ✅ FIX (was styleUrl ❌)
})
export class HolidayComponent {

holidays: Holiday[] = [
  { id: 1, occasion: 'New Year', date: '2026-01-01' },
  { id: 2, occasion: 'Republic Day', date: '2026-01-26' },
  { id: 3, occasion: 'Maha Shivratri', date: '2026-02-15' },
  { id: 4, occasion: 'Holi', date: '2026-03-14' },
  { id: 5, occasion: 'Ram Navami', date: '2026-03-30' },
  { id: 6, occasion: 'Good Friday', date: '2026-04-03' },
  { id: 7, occasion: 'Eid-ul-Fitr', date: '2026-04-01' },
  { id: 8, occasion: 'Labour Day', date: '2026-05-01' },
  { id: 9, occasion: 'Bakrid (Eid-ul-Adha)', date: '2026-06-07' },
  { id: 10, occasion: 'Independence Day', date: '2026-08-15' },
  { id: 11, occasion: 'Janmashtami', date: '2026-08-25' },
  { id: 12, occasion: 'Gandhi Jayanti', date: '2026-10-02' },
  { id: 13, occasion: 'Dussehra', date: '2026-10-20' },
  { id: 14, occasion: 'Diwali', date: '2026-11-08' },
  { id: 15, occasion: 'Christmas', date: '2026-12-25' }
];

  // ✅ Get Day Name from Date
  getDay(date: string): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date(date).getDay()];
  }

  // ✅ Edit Action
  onEdit(holiday: Holiday) {
    console.log('Edit:', holiday);
    // 👉 next: open dialog / form
  }

  // ✅ Delete Action
  onDelete(id: number) {
    this.holidays = this.holidays.filter(h => h.id !== id);
  }

}