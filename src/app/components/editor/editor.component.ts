import { Component, OnInit, Input } from '@angular/core';
import { Constants } from 'src/app/core/enum/constants.enum';
import { Update } from 'src/app/core/models/update.interface';
import { Project } from 'src/app/core/models/project.interface';
import { LocalDate } from 'src/app/core/utils/local-date/local-date';
import { UpdateService } from 'src/app/service/update/update.service';
import { UpdateRequest } from 'src/app/core/request/update-request';
import { LocalStorageService } from 'src/app/core/utils/local-storage/local-storage.service';
import { SessionData } from 'src/app/core/models/session-data.interface';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  htmlContent: string = '';
  nonProjectUpdate: String = Constants.NON_PROJECT_UPDATE;
  sessionData !: SessionData;
  selectedUpdate : Update  = {
    project : null,update : null,date : new LocalDate()
  };
  @Input() updates: Update[] = [];
  @Input() date: LocalDate = new LocalDate();

  constructor(private updateService : UpdateService, private localStorageService : LocalStorageService) {
    this.sessionData = localStorageService.getSessionData();
  }

  ngOnInit(): void {
    let nonProjectUpdateBoolean : boolean = false;
    for(let update of this.updates){
      if(update.project===null){
        nonProjectUpdateBoolean = true;
        break;
      }
    } 
    if(!nonProjectUpdateBoolean){
      this.updates.push({
        project : null,
        update : null,
        date : this.date
      })
    }
    this.selectedUpdate = this.updates[0];
    this.htmlContent = this.selectedUpdate.update === null ? '' : this.selectedUpdate.update.remarks;
  }

  getHtmlContent(): String {
    return this.htmlContent;
  }

  onProjectSelect(project:Project | null):void{
    this.updateSelectedProjectHtmlContent();
    for(let update of this.updates){
      if(project===null && update.project===null){
        this.selectedUpdate = update;
        this.htmlContent = this.selectedUpdate.update === null ? '' : this.selectedUpdate.update.remarks;
        break;
      }
      if(update.project!==null && update.project?.id === project?.id){
        this.selectedUpdate = update;
        this.htmlContent = this.selectedUpdate.update === null ? '' : this.selectedUpdate.update.remarks;
        break;
      }
    }
  }

  updateSelectedProjectHtmlContent():void{
    if(this.htmlContent.trim()==='')
      return;
    for(let update of this.updates){
      if(update.project===null && this.selectedUpdate.project===null){
        if(update.update === null){
          update.update = {
            id:null,
            remarks: this.htmlContent,
            type:null
          }
        }else{
          update.update.remarks = this.htmlContent;
        }
        break;
      }
      if(update.project!==null && this.selectedUpdate.project!==null && update.project.id === this.selectedUpdate.project.id){
        if(update.update === null){
          update.update = {
            id:null,
            remarks: this.htmlContent,
            type:null
          }
        }else{
          update.update.remarks = this.htmlContent;
        }
        break;
      }
    }
  }

  addUpdate():void{
    this.updateSelectedProjectHtmlContent();
    console.log(this.selectedUpdate);
    if(this.selectedUpdate.update!==null && this.selectedUpdate.update.remarks!==null && this.selectedUpdate.update.id!==null){
      if(this.selectedUpdate.update.id!==null){
        this.updateService.editUpdate(this.selectedUpdate.update).subscribe({
          next : (response : Update)=>{
            this.selectedUpdate = response;
            this.updateSelectedProjectHtmlContent();
          },
          error : (error)=>{
            console.log(error);
          }
        })
    }
  }   
  else if(this.selectedUpdate.update!==null &&this.selectedUpdate.update.remarks!==null){
      if(this.selectedUpdate.update.id!==null){
        let postUpdate : UpdateRequest = {
          projectId : this.selectedUpdate.project!==null ? this.selectedUpdate.project.id : null,
          employeeId : parseInt(this.sessionData.userData.employeeId),
          remarks : this.selectedUpdate.update.remarks,
          date : this.selectedUpdate.date
        }
        this.updateService.postUpdate(postUpdate).subscribe({
          next : (response : Update)=>{
            this.selectedUpdate = response;
            this.updateSelectedProjectHtmlContent();
          },
          error : (error)=>{
            console.log(error);
          }
        })
      }
      }
  }

}
