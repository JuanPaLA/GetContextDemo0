import { Component, OnInit, Input } from '@angular/core';
import { Grafico } from './grafico.model';

@Component({
  selector: 'app-graf1',
  templateUrl: './graf1.component.html',
  styleUrls: ['./graf1.component.css']
})
export class Graf1Component implements OnInit {

  //Con el decorador Input indicamos que el objeto "grafico" obtendrá los valores
  //de sus respectivas propiedades del objeto que pasemos en "graficoInput".
  //Este hará el llamado desde el componente padre, que pasará a su vez una instancia
  //de tipo Grafico para poblar las propiedades del componente hijo. 
  
  @Input('graficoInput') grafico: Grafico;
  constructor() { }

  ngOnInit() {

  }

}
