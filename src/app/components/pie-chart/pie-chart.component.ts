import { Component, OnInit } from '@angular/core';
import { GraphData } from 'src/app/interface/pieData';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data: GraphData[] = [
    { item: 'Jan', height: 20 },
    { item: 'feb', height: 50 },
    { item: 'mar', height: 50 },
    { item: 'apr', height: 50 },
    { item: 'may', height: 90 },
    { item: 'june', height: 50 },
    { item: 'july', height: 50 },
    { item: 'aug', height: 50 },
    { item: 'sep', height: 50 },
    { item: 'oct', height: 50 },
    { item: 'nov', height: 50 },
    { item: 'dec', height: 50 },
  ];
  isMonth: boolean = true;
  monthValues: number[] = [30, 25, 20, 15, 10, 5, 0];
  dayValues: number[] = [5, 4, 3, 2, 1, 0];
}
