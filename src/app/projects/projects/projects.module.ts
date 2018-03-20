import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from '../projects.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule, 
    MatExpansionModule, 
    MatInputModule, 
    MatFormFieldModule
  ],exports:[
  	MatExpansionModule, 
  	MatInputModule, 
  	MatFormFieldModule
  ], 
	declarations: [ProjectsComponent]
})
export class ProjectsModule { }
