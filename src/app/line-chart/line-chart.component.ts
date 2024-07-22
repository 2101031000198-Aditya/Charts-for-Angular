// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ChartType } from 'chart.js';


// @Component({
//   selector: 'app-line-chart',
//   templateUrl: './line-chart.component.html',
//   styleUrls: ['./line-chart.component.css']
// })
// export class LineChartComponent implements OnInit {
//   public lineChartData: any[] = [];
//   public lineChartLabels: any[] = [];
//   public lineChartOptions: any = {
//     responsive: true,
//   };
//   public lineChartColors: any[] = []; // Define the lineChartColors array
//   public lineChartLegend = true;
//   public lineChartType: ChartType = 'line' as ChartType; // Define the lineChartType
//   public lineChartPlugins = [];

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.http.get<any[]>('https://localhost:44393/api/values').subscribe(data => {
//       this.lineChartLabels = data.map(item => item.timestamp);
//       this.lineChartData = [
//         { data: data.map(item => item.height), label: 'Height' },
//         { data: data.map(item => item.speed), label: 'Speed' }
//       ];
//     });
//   }
// }
