import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bind',
  template: `<input [(ngModel)]="name" type="text">
  {{name}}`,
  styleUrls: ['./two-way-bind.component.css']
})
export class TwoWayBindComponent implements OnInit {

  public name ="";
  constructor() { }

  ngOnInit() {
  }

}
