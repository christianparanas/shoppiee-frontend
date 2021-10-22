import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  lineChartOptions: ChartOptions  = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
         display: false
      }],
      yAxes: [{
         display: false
      }]
   }
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'white',
      backgroundColor: '#FA5291',
    },
  ];
  lineChartLegend: any = false;
  lineChartType: any = 'line';
  lineChartPlugins: any = [];

  constructor() {}

  ngOnInit(): void {}
}
