import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-test',
  template: `<div *ngIf="true">
                  <h2>TRUE DIV</h2>
            </div>
              <div *ngIf="display2ndDiv">
                 <h2 [style.color]="color">2nd Div</h2>
              </div>
              <div *ngIf="display3rdDiv else elseBlock">
                 <h2>IF--3rd Div</h2>
              </div>
              <ng-template #elseBlock>
                 <h2>ELSE--3rd Div</h2>
              </ng-template>
              <div *ngIf="display4thDiv;then thenBlock;else else4thBlock"></div>
              <ng-template #thenBlock>
               <h2>IF--4th Block</h2>
              </ng-template>
              <ng-template #else4thBlock>
               <h2>ELSE--4th Block</h2>
              </ng-template>`,
  styleUrls: ['./if-test.component.css']
})
export class IfTestComponent implements OnInit {

  display2ndDiv = true;
  display3rdDiv = false;
  display4thDiv = true;
  color = "red";
  constructor() { }

  ngOnInit() {
  }

}
