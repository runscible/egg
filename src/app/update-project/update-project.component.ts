import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute , Router} from '@angular/router';
import {Location} from '@angular/common';

import {ProjectService} from '../project.service';
import {Project} from '../Project'; 
@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
@Input() project : Project; 	
  constructor(
  	private router:Router, 
  	private route: ActivatedRoute, 
  	private projectService:ProjectService, 
  	private location : Location ) { }

  ngOnInit() {
  	this.getProject();
  }

  getProject(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.projectService.getProject(id).
      subscribe(project => this.project = project);    
  }

  save():void{
  	this.projectService.updateProject(this.project)
  			.subscribe(project => this.project = project);  
  }

  goBack():void {
    this.location.back(); 
  }
}
