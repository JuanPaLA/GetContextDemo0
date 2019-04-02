import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { ModulosComponent } from './dashboard/modulos/modulos.component';
import { AboutComponent } from './about/about.component';
import { CostosOperativosComponent } from './dashboard/modulos/costos-operativos/costos-operativos.component';
import { TecSersComponent } from './dashboard/modulos/tec-sers/tec-sers.component';


const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'dashboard', component: CostosOperativosComponent },
  { path: 'about', component: AboutComponent },
  { path: '',   redirectTo: 'about', pathMatch: 'full'},
  { path: 'home',   redirectTo: 'about', pathMatch: 'full'},
  
  { path: 'costos-operativos', component: CostosOperativosComponent },
  { path: 'tecnologias-servicios', component: TecSersComponent }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
