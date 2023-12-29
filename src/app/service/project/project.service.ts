import { Injectable } from '@angular/core';
import { Project } from 'src/app/core/models/project.interface';
import { HttpService } from 'src/app/core/utils/http-service/http.service';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpService : HttpService) { }

  getAllProjects():Observable<Project[]>{
    return this.httpService.get(`projects?active=true&publicProjects=true`)
    .pipe(
      map((response:any)=>{
        return response.data.map((projectData: any) => {
          return {
            id: projectData.id,
            name: projectData.name,
            teamSize: projectData.teamSize,
            taskTeamId: projectData.taskTeamId,
            slug: projectData.slug,
            member: projectData.member,
            parentProjectId: projectData.parentProjectId,
            numberOfSubProjects: projectData.numberOfSubProjects,
          }
        });
      }),
      catchError((error)=>{
        throw error;
      })
    )
  }

}
