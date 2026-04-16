import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexDataLabels,
  ApexLegend,
  ApexFill
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analysis',
  standalone: true,
  imports: [
    NgApexchartsModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './analysis.component.html',
  styleUrl: './analysis.component.scss'
})
export class AnalysisComponent {

  /* RANGE */
  ranges = [
    { label: 'Last 7 Days', value: '7' },
    { label: 'Last 30 Days', value: '30' },
    { label: 'Last Year', value: '365' }
  ];
  selectedRange = '7';

cards = [
  {
    title: 'Total Employees',
    value: '1,248',
    icon: 'pi pi-users',
    bg: 'bg-blue-50',
    color: 'text-blue-600'
  },
  {
    title: 'Attendance Rate',
    value: '92.4%',
    icon: 'pi pi-chart-line',
    bg: 'bg-green-50',
    color: 'text-green-600'
  },
  {
    title: 'Leave Taken',
    value: '156',
    icon: 'pi pi-calendar',
    bg: 'bg-yellow-50',
    color: 'text-yellow-600'
  },
  {
    title: 'Avg Work Hours',
    value: '7h 45m',
    icon: 'pi pi-clock',
    bg: 'bg-purple-50',
    color: 'text-purple-600'
  }
];

  /* CHARTS */

  attendanceChart = {
    series: [{ name: 'Attendance', data: [80,85,78,90,88,92,95] }] as ApexAxisChartSeries,
    chart: { type: 'line' as const, height: 260, toolbar: { show: false } } as ApexChart,
    stroke: { curve: 'smooth' as const, width: 2 } as ApexStroke,
    xaxis: { categories: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] } as ApexXAxis,
    dataLabels: { enabled: false } as ApexDataLabels
  };

  leaveChart = {
    series: [44,30,26],
    chart: { type: 'donut' as const, height: 260 } as ApexChart,
    labels: ['Sick','Casual','Paid'],
    legend: { position: 'bottom' } as ApexLegend
  };

  monthlyChart = {
    series: [{ name: 'Employees', data: [30,40,35,50,49,60,70] }] as ApexAxisChartSeries,
    chart: { type: 'bar' as const, height: 260, toolbar: { show: false } } as ApexChart,
    xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'] } as ApexXAxis
  };

  hoursChart = {
    series: [{ name: 'Hours', data: [6,7,7.5,8,7.8,8.2,8] }] as ApexAxisChartSeries,
    chart: { type: 'area' as const, height: 260, toolbar: { show: false } } as ApexChart,
    stroke: { curve: 'smooth' as const } as ApexStroke,
    fill: { opacity: 0.2 } as ApexFill,
    xaxis: { categories: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'] } as ApexXAxis
  };

}