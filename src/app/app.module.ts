import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { HeaderComponent } from './estructuras/header/header.component';
import { BlogComponent } from './componentes/blog/blog.component';
import { NavComponent } from './estructuras/nav/nav.component';
import { AboutComponent } from './componentes/about/about.component';
import { MainComponent } from './componentes/dashboard/main/main.component';
import { ListaComponent } from './componentes/dashboard/modulos/lista/lista.component';
import { CostosComponent } from './componentes/dashboard/modulos/costos/costos.component';
import { LoginComponent } from './componentes/login/login.component';
import { PaginawebComponent } from './componentes/dashboard/modulos/paginaweb/paginaweb.component';
import { MyBarChartComponent } from './componentes/dashboard/modulos/my-bar-chart/my-bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    NavComponent,
    AboutComponent,
    MainComponent,
    ListaComponent,
    CostosComponent,
    LoginComponent,
    PaginawebComponent,
    MyBarChartComponent
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
