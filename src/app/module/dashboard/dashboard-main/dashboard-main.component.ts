import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexNonAxisChartSeries
} from "ng-apexcharts";

// ✅ Types (outside class)
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
  imports: [NgApexchartsModule],
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent {

  // 📈 Line Chart
  lineChart: AxisChartOptions = {
    series: [{ name: "Employees", data: [10, 20, 15, 30, 25] }],
    chart: { type: "line", height: 300 },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] }
  };

  // 📊 Bar Chart
  barChart: AxisChartOptions = {
    series: [{ name: "Departments", data: [5, 10, 8, 12] }],
    chart: { type: "bar", height: 300 },
    xaxis: { categories: ["HR", "IT", "Sales", "Admin"] }
  };

  // 🥧 Donut Chart
  donutChart: DonutChartOptions = {
    series: [44, 55, 13, 33],
    chart: { type: "donut", height: 300 },
    labels: ["HR", "IT", "Sales", "Admin"]
  };

  // 📉 Area Chart
  areaChart: AxisChartOptions = {
    series: [{ name: "Leaves", data: [2, 5, 3, 6, 4] }],
    chart: { type: "area", height: 300 },
    xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri"] }
  };

}