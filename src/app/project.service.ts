import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Project} from './Project'; 
import {MessageService } from './message.service'; 
import {Location} from '@angular/common'; 


const options = {
  		headers: new HttpHeaders({'Content-Type': 'application/json'})
 }; 
@Injectable()
export class ProjectService {
	private ProjectUrl = 'api/projects'; 

  	constructor(private http : HttpClient, 
                private messageService: MessageService, 
                private location: Location) { }
  	  	
  	  getProjects (): Observable<Project[]>{
			  return this.http.get<Project[]>(this.ProjectUrl)
  					.pipe(
  						tap(projects => this.log('fetched projects')), 
  						catchError(this.handleError('getProjects', [])) 
  				); 
  		}
      
      public searchProject(term: string): Observable<Project[]>{
        if (!term || term == undefined || term === null){
          return this.http.get<Project[]>(this.ProjectUrl)
          .pipe(
            tap(projects => this.log('fetched projects')), 
            catchError(this.handleError('getProjects', [])) 
          ); 
        }

        else if(!term.trim()){console.log("me ejecuto , pero mal ");return of([]);   }
          return this.http.get<Project[]>(`api/projects/?name=${term}`)
                .pipe(tap(_term=>this.log(`found projects with ${term}`)), 
                  catchError(this.handleError<Project[]>('found projects ', []))
                ); 
      }

  		public addProject(project: Project): Observable<Project>{
  			return this.http.post<Project>(this.ProjectUrl, project, options	)
  					.pipe(
  						tap((project: Project)=> this.log(`added project ${project.name}`)), 
  						catchError(this.handleError<Project>('addPorject'))	
  				); 
  		}

      getProject(id:number) : Observable<Project>{

        const url = `${this.ProjectUrl}/${id}`;
         
        return this.http.get<Project>(url).pipe(
          tap(_ => this.log(`project ${id}`)), 
          catchError(this.handleError<Project>(`project ${id}`))
          ); 
      }


      updateProject(project: Project): Observable<any>{
        return this.http.put(this.ProjectUrl, project, options)
              .pipe(tap(_=> this.log(`projects ${project.id}`)), 
                catchError(this.handleError<any>('updated project'))
          ); 
      }

  		private handleError<T>(operation = 'operation', result?: T){
  			return (error: any): Observable<T> => {
  				console.error(error);
  				this.log(`${operation} failed: ${error.message}`); 
  				return of(result as T); 
  			}; 
  		}
  		private log(message: string){
  			this.messageService.add(message);  
  		}
  	
}
