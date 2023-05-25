import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js'
@Component({
  selector: 'app-visitor-analytics-chart',
  templateUrl: './visitor-analytics-chart.component.html',
  styleUrls: ['./visitor-analytics-chart.component.scss']
})
export class VisitorAnalyticsChartComponent implements OnInit{
  public areaChartData: any[] = [
    { label: 'Mon', value: 5 },
    { label: 'Tue', value: 10 },
    { label: 'Wed', value: 15 },
    { label: 'Thur', value: 3 },
    { label: 'Fri', value: 15 },
    { label: 'Sat', value: 12 },
    { label: 'Sun', value: 25 }
  ];

  constructor() { }

  ngOnInit(): void {
    this.createAreaChart();
  }

  createAreaChart(): void {
    const canvas = document.getElementById('areaChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if(ctx){
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.areaChartData.map(data => data.label),
        datasets: [
          {
            label: 'Visitors',
            data: this.areaChartData.map(data => data.value),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
}