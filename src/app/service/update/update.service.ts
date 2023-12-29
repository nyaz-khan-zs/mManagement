import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { UpdateRequest } from 'src/app/core/request/update-request';
import { HttpService } from 'src/app/core/utils/http-service/http.service';
import { Update } from 'src/app/core/models/update.interface';
import { Project } from 'src/app/core/models/project.interface';
import { UpdateRemark } from 'src/app/core/models/update-remark.interface';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private httpService : HttpService) { }

  postUpdate(update : UpdateRequest) : Observable<Update>{
    return this.httpService.post(`updates`,update)
    .pipe(
      map((value : any)=>{
        return {
          project : value.data.project as Project,
          date : value.data.date,
          update : {
            id : value.data.id,
            remarks : value.data.remarks,
            type : value.data.type
          }
        }
      }),
      catchError((error)=>{
        throw error;
      })
    )
  }

  editUpdate(update : UpdateRemark) : Observable<Update>{
    return this.httpService.put(`updates/${update.id}`,{remarks : update.remarks})
    .pipe(
      map((value : any)=>{
        return {
          project : value.data.project as Project,
          date : value.data.date,
          update : {
            id : value.data.id,
            remarks : value.data.remarks,
            type : value.data.type
          }
        }
      }),
      catchError((error)=>{
        throw error;
      })
    )
  }

}
