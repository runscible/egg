import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryProjectsService} from './in-memory-projects.service'; 
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule, 
        MatIconModule, 
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule, 
        MatListModule,
        MatDialogModule, 
        MatCardModule} from '@angular/material'; 
import { AppComponent } from './app.component';
import {ProjectsComponent} from './projects/projects.component'; 
import {ProjectsModule} from './projects/projects/projects.module'; 
import {ProjectService} from './project.service';
import {MessageService} from './message.service';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';

@NgModule({
  declarations: [
    AppComponent, 
    ProjectsComponent, 
    UnderConstructionComponent, 
    DetailProjectComponent,
    UpdateProjectComponent, 
  ],
  imports: [
    BrowserModule,
    MatButtonModule, 
    AppRoutingModule, 
    MatIconModule, 
    MatExpansionModule, 
    BrowserAnimationsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatListModule,  
    HttpClientModule, 
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryProjectsService, { dataEncapsulation: false }
    ), 
    MatDialogModule, 
    FormsModule, 
    MatCardModule
    ],
  providers: [ProjectService, MessageService,ProjectsComponent ],
  bootstrap: [AppComponent], 
  entryComponents: [ProjectsComponent, UnderConstructionComponent, UpdateProjectComponent, DetailProjectComponent]
})
export class AppModule { }
