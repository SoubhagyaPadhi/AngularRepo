import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-test',
  template: `<div [ngSwitch]="color">
    <div *ngSwitchCase="'red'" [style.color]="'red'"><h2>Picked Red Color!!</h2></div>
    <div *ngSwitchCase="'green'" [style.color]="'green'"><h2>Picked Green Color!!</h2></div>
    <div *ngSwitchDefault><h2>Picked No Color!!</h2></div>
  </div>`,
  styles: []
})
export class SwitchTestComponent implements OnInit {

  public color="green";
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log(this.color);
  }

}
