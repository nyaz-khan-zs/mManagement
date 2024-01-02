import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  isExpanded : boolean;
  isExpanded$ : BehaviorSubject<boolean>;

  constructor() { 
    this.isExpanded = true;
    this.isExpanded$ = new BehaviorSubject<boolean>(this.isExpanded);
  }

  toggleSidebar() : void{
    this.isExpanded = !this.isExpanded;
    this.isExpanded$.next(this.isExpanded);
  }
}
