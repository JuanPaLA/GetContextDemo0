import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-costos',
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.css']
})
export class CostosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fiesta = 'hola pianolas';
  
  fakeArray: { id: number, name: string }[] = [
    { "id": 0, "name": "Costos de tu vieja" },
    { "id": 1, "name": "Costos de tu hermana" },
    { "id": 2, "name": "Costos de tu tia" }
  ];


}