import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-holiday',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    InputTextModule
  ],
  templateUrl: './holiday.component.html'
})
export class HolidayComponent {

  searchText = '';
  selectedYear = '2024';

  years = [
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' }
  ];

  holidays = [
    { name: 'New Year', date: new Date('2024-01-01'), day: 'Monday', description: 'New Year Celebration', icon: '🎉' },
    { name: 'Republic Day', date: new Date('2024-01-26'), day: 'Friday', description: 'National Holiday', icon: '🇮🇳' },
    { name: 'Holi', date: new Date('2024-03-25'), day: 'Monday', description: 'Festival of Colors', icon: '🎨' },
    { name: 'Good Friday', date: new Date('2024-03-29'), day: 'Friday', description: 'Religious Holiday', icon: '✝️' },
    { name: 'Independence Day', date: new Date('2024-08-15'), day: 'Thursday', description: 'National Holiday', icon: '🇮🇳' },
    { name: 'Gandhi Jayanti', date: new Date('2024-10-02'), day: 'Wednesday', description: 'Remembering Gandhi Ji', icon: '🕊️' },
    { name: 'Diwali', date: new Date('2024-11-01'), day: 'Friday', description: 'Festival of Lights', icon: '🪔' },
    { name: 'Christmas', date: new Date('2024-12-25'), day: 'Wednesday', description: 'Christmas Celebration', icon: '🎄' }
  ];

  get filteredHolidays() {
    return this.holidays.filter(h =>
      h.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}