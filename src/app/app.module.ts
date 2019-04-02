import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ModulosComponent } from './dashboard/modulos/modulos.component';
import { CostosOperativosComponent } from './dashboard/modulos/costos-operativos/costos-operativos.component';
import { CoBarChartComponent } from './dashboard/modulos/costos-operativos/co-bar-chart/co-bar-chart.component';
import { CoLineChartComponent } from './dashboard/modulos/costos-operativos/co-line-chart/co-line-chart.component';
import { NavMenuComponent } from './dashboard/nav-menu/nav-menu.component';
import { CoRadarChartComponent } from './dashboard/modulos/costos-operativos/co-radar-chart/co-radar-chart.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { TecSersComponent } from './dashboard/modulos/tec-sers/tec-sers.component';
import { Graf1Component } from './dashboard/modulos/tec-sers/graf1/graf1.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogComponent,
    ModulosComponent,
    CostosOperativosComponent,
    CoBarChartComponent,
    CoLineChartComponent,
    NavMenuComponent,
    CoRadarChartComponent,
    FooterComponent,
    TecSersComponent,
    Graf1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
