import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexNonAxisChartSeries
} from "ng-apexcharts";
import { DashboardCard } from '../../../model/dashboard.model';

type AxisChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
};

type DonutChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
};

@Component({
  standalone: true,
  selector: 'app-dashboard-main',
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent {
  today = new Date().toISOString().split('T')[0]

  cards: DashboardCard[] = [
    {
      title: 'Total Employees',
      value: 1248,
      changeValue: '12.5%',
      changeText: 'from last month',
      isPositive: true,
      icon: 'pi-users',
      bg: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Active Employees',
      value: 1021,
      changeValue: '8.3%',
      changeText: 'from last month',
      isPositive: true,
      icon: 'pi-user-plus',
      bg: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      title: 'Inactive Employees',
      value: 227,
      changeValue: '3.2%',
      changeText: 'from last month',
      isPositive: false,
      icon: 'pi-user-minus',
      bg: 'bg-red-100',
      textColor: 'text-red-500'
    },
    {
      title: 'New Joinings',
      value: 42,
      changeValue: '15.7%',
      changeText: 'this month',
      isPositive: true,
      icon: 'pi-user-edit',
      bg: 'bg-purple-100',
      textColor: 'text-purple-600'
    }
  ];

  lineChart: AxisChartOptions = {
    series: [{ name: "Employees", data: [10, 20, 15, 30, 25] }],
    chart: {
      type: "line",
      height: 300,
    toolbar: { show: true },
      zoom: { enabled: false }
    },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] }
  };

  barChart: AxisChartOptions = {
    series: [{ name: "Departments", data: [5, 10, 8, 12] }],
    chart: {
      type: "bar",
      height: 300,
      toolbar: { show: true },
      zoom: { enabled: false }
    },
    xaxis: { categories: ["HR", "IT", "Sales", "Admin"] }
  };

  donutChart: DonutChartOptions = {
    series: [44, 55, 13, 33],
    chart: {
      type: "donut",
      height: 300,
      toolbar: { show: true }
      
    },
    labels: ["HR", "IT", "Sales", "Admin"]
  };

  areaChart: AxisChartOptions = {
    series: [{ name: "Leaves", data: [2, 5, 3, 6, 4] }],
    chart: {
      type: "area",
      height: 300,
      toolbar: { show: true },
      zoom: { enabled: false }
    },
    xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri"] }
  };

}