import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './componentes/blog/blog.component';
import { AboutComponent } from './componentes/about/about.component';
import { MainComponent } from './componentes/dashboard/main/main.component';
import { CostosComponent } from './componentes/dashboard/modulos/costos/costos.component';
import { PaginawebComponent } from './componentes/dashboard/modulos/paginaweb/paginaweb.component';

const routes: Routes = [
  { path: 'blog' , component: BlogComponent } ,
  { path: 'about' , component: AboutComponent },  
  { path: 'dashboard' , component: MainComponent },
  { path: 'dashboard/costos', component: CostosComponent },
  { path: 'dashboard/paginaweb', component: PaginawebComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
