import { Component, OnInit } from '@angular/core';
import { Grafico } from './graf1/grafico.model';

@Component({
  selector: 'app-tec-sers',
  templateUrl: './tec-sers.component.html',
  styleUrls: ['./tec-sers.component.css']
})
export class TecSersComponent implements OnInit {

  graficoParent: Grafico;

  constructor() {
    //Estos son datos que pueden ser traido de una API
    this.graficoParent = new Grafico();
    this.graficoParent.tipo ="Barra";
    this.graficoParent.variables= 3;
    this.graficoParent.definicion="Medir la verdad de la milanesa";
    this.graficoParent.contexto="usado por delincuentes";
   }

  ngOnInit() {
  }

}
