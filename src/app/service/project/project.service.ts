import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/utils/http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpService : HttpService) { }
}
