import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Organisation } from 'src/app/core/models/organisation.interface';
import { HttpService } from 'src/app/core/utils/http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  constructor(private httpService : HttpService) { }

  getOrganisation():Observable<Organisation>{
    return this.httpService.get('organisation')
    .pipe(
      map((json:any)=>{
        return json.data as Organisation
      }),
      catchError((error)=>{
        throw error;
      })
    )
  }


}
