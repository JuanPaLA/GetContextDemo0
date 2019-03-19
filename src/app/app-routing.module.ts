import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { ModulosComponent } from './dashboard/modulos/modulos.component';
import { AboutComponent } from './about/about.component';
import { CostosOperativosComponent } from './dashboard/modulos/costos-operativos/costos-operativos.component';


const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'dashboard', component: ModulosComponent },
  { path: 'about', component: AboutComponent },

  { path: 'costos-operativos', component: CostosOperativosComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
