import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-co-radar-chart',
  templateUrl: './co-radar-chart.component.html',
  styleUrls: ['./co-radar-chart.component.css']
})
export class CoRadarChartComponent implements OnInit {

  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: '2017'},
    {data: [90, 150, 200, 45], label: '2018'}
  ];
  public radarChartType = 'radar';


  constructor() { }

  ngOnInit() {
  }

}
