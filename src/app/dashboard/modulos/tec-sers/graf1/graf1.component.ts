import { Component, OnInit, Input } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-graf1',
  templateUrl: './graf1.component.html',
  styleUrls: ['./graf1.component.css']
})
export class Graf1Component implements OnInit {

  grafico: any;
  @Input('tipo') variable: string;
  constructor() { }

  ngOnInit() {
    this.grafico = {
      tipo: this.variable,
      descripcion: 'medir la verdad de la milanesa',
      contexto: 'se lo utiliza sobretodo para comparacíón de variables numéricas',
      variables: 3
    }
  }

}
