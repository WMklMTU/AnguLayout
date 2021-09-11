import { Component, OnInit } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { Color, NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from '../data';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  title = 'ngxChartTestA12';
  multi: any[] = [];
  view: [number, number] = [1600, 800];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme: string | Color = '#5AA454 #E44D25 #CFC0BB 7aa3e5 a8385d aae3f5';

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {}
}
