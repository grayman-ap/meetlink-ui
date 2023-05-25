import { Component } from '@angular/core';
import HomeIcon from '@material-ui/icons/Home';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {
  Card=[
    {
      numberCount: '26',
      icon: "../assets/vector/users.svg",
      title: "Branches",
      color: '#003366'
    },
    {
      numberCount: '56',
      icon: "../assets/vector/users.svg",
      title: "Registered Staffs",
      color: '#00CC99'
    },
    {
      numberCount: '12',
      icon: "../assets/vector/users.svg",
      title: "Registered Guards",
      color: '#666666'
    },
    {
      numberCount: '46',
      icon: "../assets/vector/users.svg",
      title: "Users",
      color:'#660099'  
    },
  ]
barChartData: any[]|undefined;
barChartLabels: unknown[]|undefined;
barChartOptions: any;
barChartLegend: boolean|undefined;
barChartType: any;
primaryXAxis: any;
primaryYAxis: any;
chartArea: any;
title: any;
width: any;
height: any;
legendSettings: any;
tooltip: any;
areaChartData: any;
}
