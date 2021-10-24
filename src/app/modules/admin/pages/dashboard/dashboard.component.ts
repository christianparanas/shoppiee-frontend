import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  lineChartType: any = 'line';
  currentChart: string = 'products'

  // top overview btn chart
  dashBtnSetting = {
    lineChartLabels: ['January','February','March', 'April', 'May', 'June', 'July'],
    lineChartData: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },],
     lineChartLegend: false,
     lineChartType: 'line',
     lineChartOptions: {
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
    },
    lineChartColors:[
      {
        borderColor: 'white',
        backgroundColor: 'rgb(250, 82, 145, 0.5)',
      },
    ]
  }

  dashSetting = {
    lineChartLabels: ['January','February','March', 'April'],
    lineChartData: [{ data: [65, 59, 80, 81], label: 'Series A' },],
     lineChartLegend: false,
     lineChartType: 'line',
     lineChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
           display: true
        }],
        yAxes: [{
           display: true
        }]
     }
    },
    lineChartColors:[
      {
        borderColor: 'pink',
        backgroundColor: 'rgb(250, 82, 145, 0.2)',
      },
    ]
  }

  changeChartData(arg: any) {
    if(arg == 'products') {
      this.currentChart = 'products'
      this.dashSetting.lineChartData = [{ data: [65, 59, 80, 81], label: 'Series A' },]
    } else if(arg == 'sales') {
      this.currentChart = 'sales'
      this.dashSetting.lineChartData = [{ data: [12, 40, 60, 21], label: 'Series A' },]
    } else {
      this.currentChart = 'orders'
      this.dashSetting.lineChartData = [{ data: [20, 30, 80, 11], label: 'Series A' },]
    }
  }
  
  constructor() {}

  ngOnInit(): void {}
}
