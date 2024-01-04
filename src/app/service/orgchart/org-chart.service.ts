import { Injectable } from '@angular/core';
import { Node, User } from '../../models/models/org.model';
import { data } from '../../mock/response';

@Injectable({
  providedIn: 'root',
})
export class OrgChartService {
  constructor() {}
  public getChildren(id: number): Node[] {
    const employeeData = data
      .filter((item: User) => item.reportingTo === id)
      .map((item1: User) => {
        const nodeData: Node = {
          id: item1.id,
          parentId: item1.reportingTo,
          name: item1.name,
          positionName: item1.designation,
          img: item1.profileUrl ?? '../assets/download.png',
          size: item1.numberOfSubOrdinates,
        };
        return nodeData;
      });
    return employeeData;
  }
}
