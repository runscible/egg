import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryProjectsService implements InMemoryDbService{

  createDb(){
  	const projects = [
	  	{id:1,name: 'test project 1 ', content: 'test content 1', note: 'note note note note note note note note note note '}, 
		{id:2,name: 'test project 2 ', content: 'test content 2', note: 'note note note note note note note note note note '}, 
		{id:3,name: 'test project 3 ', content: 'test content 3', note: 'note note note note note note note note note note '}, 
		{id:4,name: 'test project 4 ', content: 'test content 4', note: 'note note note note note note note note note note '}, 
		{id:5,name: 'test project 5 ', content: 'test content 5', note: 'note note note note note note note note note note '}, 

  	]; 
  	return {projects}; 
  }

}
