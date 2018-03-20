import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import {Project} from '../Project';
import {ProjectService} from '../project.service';  
@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {
  public project: Project; 
  constructor(
    private router: Router, 
  	private route : ActivatedRoute, 
  	private projectService: ProjectService, 
  	private location : Location
    ) { }
  
  ngOnInit() {
    this.getProject(); 
  }

  getProject(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.projectService.getProject(id).
      subscribe(project => this.project = project);    
  }

  goBack():void{
  	this.location.back(); 
  }
}
