import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule 
  ],
  exports: [
  	MatButtonModule
  ], 
  declarations: [NavbarComponent]
})
export class NavbarModule { }
