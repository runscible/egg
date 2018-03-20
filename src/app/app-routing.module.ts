import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnderConstructionComponent} from  './under-construction/under-construction.component';  
import {DetailProjectComponent} from './detail-project/detail-project.component'; 
import {UpdateProjectComponent} from './update-project/update-project.component'; 
const routes: Routes = [
	{path: 'underconstrution', component : UnderConstructionComponent}, 
	{path : 'detail/:id', component: DetailProjectComponent}, 
	{path: 'update/:id', component: UpdateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
