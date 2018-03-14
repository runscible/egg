import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule, MatIconModule} from '@angular/material'; 
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component'; 
import {NavbarModule} from './navbar/navbar.module'; 
import {ProjectsComponent} from './projects/projects.component'; 
import {TaskbarComponent} from './taskbar/taskbar.component'; 
@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    ProjectsComponent, 
    TaskbarComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    AppRoutingModule, 
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
