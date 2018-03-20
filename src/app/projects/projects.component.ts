import {Component, OnInit, Injectable} from '@angular/core';
import {Router} from '@angular/router'; 
import {MatTableDataSource} from '@angular/material/'; 
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProjectService} from '../project.service';  
import {Project} from '../Project'; 
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'] 
})


export class ProjectsComponent implements  OnInit{
  private searchTerms = new Subject<string>(); 
  constructor(private projectService: ProjectService,
              public dialog: MatDialog,
              private router: Router) { 
  }
  _projects : Project[];   
  projects : any; 
  app: boolean = false; 
  term : string; 
  async_list: boolean =false; 
  editProject: boolean = false; 
  

  ngOnInit() {
      this.getProjects(); 
      this.projects =  Observable.of(this._projects); 
      this.projects = this.searchTerms.pipe(
          debounceTime(300), 
          distinctUntilChanged(), 
          switchMap((term:string)=> this.projectService.searchProject(term)), 
      );
  }  
  
  searchProject(term:string):void{
      this.async_list = true; 
      this.searchTerms.next(term);   
   }
  
   getProjects():void{
     console.log("estoy buscando"); 
     this.projectService.getProjects()
           .subscribe(project => this._projects = project); 
   }
  
  openDialog(): void{
      this.app = true; 
   }
   
   add(name :string, content:string,note:string ,id: number):void {
     if(!name || !content){ alert('falta uno o mas valores en el registro'); return;}
     id = this._projects.length +1; 
     this.projectService.addProject({name,content, id,note} as Project)
          .subscribe(project => {
            this._projects.push(project); 
            this.projects =  Observable.of(this._projects); 
            this.projects = this.searchTerms.pipe(
                switchMap((term:string)=> this.projectService.searchProject(term)), 
            );
       }); 
       this.app = false;    
   }
   close(): void{
     this.app = false; 
   }    

   projectDetail(): void{
       let id: any = event.srcElement.id; 
       this.router.navigateByUrl(`detail/${id}`);   
   }
   projectEdit(): void{
     let id: any = event.srcElement.id; 
     this.router.navigateByUrl(`update/${id}`);   
   }
} 

