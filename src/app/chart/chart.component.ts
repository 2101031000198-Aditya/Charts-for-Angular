import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MeasurementModule } from '../measurement/measurement.module';
import { Color, ScaleType } from '@swimlane/ngx-charts/public-api';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  measurements: MeasurementModule[] = [];
  
  // Chart Options
  view: [number, number] = [700, 400];
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  xAxisLabel: string = 'Height';
  yAxisLabel: string = 'Speed';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  colorScheme: Color[] = [
    { 
      name: 'Green',
      selectable: true,
      group: ScaleType.Ordinal as ScaleType, // Use ScaleType.Ordinal explicitly
      domain: ['#5AA454']
    },
    { 
      name: 'Red',
      selectable: true,
      group: ScaleType.Ordinal as ScaleType, // Use ScaleType.Ordinal explicitly
      domain: ['#A10A28']
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.measurements = data;
    });
  }
}
