import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicador',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})

export class MyBarChartComponent implements OnInit {

  @Input() name: string;
  @Input() id: number;
  
  constructor() { }

  ngOnInit() {
  }

}
