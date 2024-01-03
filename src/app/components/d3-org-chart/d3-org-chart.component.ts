import {
  OnChanges,
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

import { OrgChart } from 'd3-org-chart';
import { Node } from '../models/org.model';
import { OrgChartService } from ;

@Component({
  selector: 'app-d3-org-chart',
  templateUrl: './d3-org-chart.component.html',
  styleUrls: ['./d3-org-chart.component.scss'],
})
export class D3OrgChartComponent implements OnInit, OnChanges {
  @ViewChild('chartContainer') chartContainer: ElementRef;
  data: Node[];
  chart: any;
  childData: Node[];

  // -----
  constructor(public orgService: OrgChartService) {}
  initialNode = {
    id: 201,
    parentId: null,
    name: 'Mukesh Singh',
    positionName: 'Founder',
    img: 'https://lh3.googleusercontent.com/a/ACg8ocKogyaJ0otNwZQGLNlzvZltsoJIuszOhje5TpjU9PxCrBg=s96-c',
    size: 411,
  };

  ngOnInit() {
    this.data = [
      this.initialNode,
      ...this.orgService.getChildren(this.initialNode.id),
    ];
  }
  handleClick(d: any) {
    const isParentIdInData = this.data.some(
      (item) => item.parentId === d.data.id - 0
    );
    this.childData = [];
    if (!isParentIdInData) {
      this.childData = this.orgService.getChildren(d.data.id - 0);
    }
    this.data = [...this.data, ...this.childData];

    this.updateChart();
  }
  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new OrgChart();
    }
    this.updateChart();
  }
  ngOnChanges() {
    this.updateChart();
  }
  updateChart() {
    if (!this.data) {
      return;
    }
    if (!this.chart) {
      return;
    }
    this.chart
      .data(this.data)
      .container(this.chartContainer.nativeElement)
      .svgWidth(window.innerWidth)
      .nodeHeight((d: any) => 110)
      .nodeWidth((d: any) => 200)
      .compactMarginBetween((d: any) => 65)
      .compactMarginPair((d: any) => 100)
      .siblingsMargin((d: any) => 100)
      .childrenMargin((d: any) => 75)
      .setActiveNodeCentered(true)
      .compact(true)
      .nodeContent((d: any) => {
        return `
                <div style="padding-top:30px;background-color:none;margin-left:1px;height:${
                  d.height
                }px;border-radius:2px;overflow:visible">
                  <div style="height:${
                    d.height - 32
                  }px;padding-top:0px;background-color:white;border:1px solid lightgray;">

                    <img src=" ${
                      d.data.img
                    }" style="margin-top:-30px;margin-left:${
          d.width / 2 - 30
        }px;border-radius:100px;width:60px;height:60px;" />
                   <div style="margin-top:-30px;background-color:#3AB6E3;height:10px;width:${
                     d.width - 2
                   }px;border-radius:1px"></div>

                   <div style="padding:20px; padding-top:35px;text-align:center">
                       <div style="color:#111672;font-size:16px;font-weight:bold"> ${
                         d.data.name
                       } </div>
                       <div style="color:#404040;font-size:16px;margin-top:4px"> ${
                         d.data.positionName
                       } </div>
                   </div>
                   <div style="display:flex;justify-content:center;">
                     <div style="background-color: #36404a;border-radius: 10px;color: #e2e4e7;font-size: 10px;font-weight: 400;height: 25px;line-height: 25px;text-align: center;width: 48px" >
                      ${d.data.size}</div>
                   </div>
                  </div>
          </div>
      `;
      })
      .nodeWidth((d: any) => 270)
      .initialZoom(0.7)
      .nodeHeight((d: any) => 180)
      .childrenMargin((d: any) => 40)
      .compactMarginBetween((d: any) => 15)
      .compactMarginPair((d: any) => 80)
      .onNodeClick((d: any) => this.handleClick(d))
      .expandAll(true)
      .render();
  }
}
