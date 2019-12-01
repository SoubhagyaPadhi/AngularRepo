import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-bind',
  template: `<h2 [style.color]="'red'">TEXT COLOR</h2>
  <h2 [style.color]="highlightedColor">Property From Class</h2>
  <h2 [ngStyle]="setStyle">NG STYLE</h2>`,
  styles: []
})
export class StyleBindComponent implements OnInit {

  public highlightedColor = "orange";
  constructor() { }

  ngOnInit() {
  }

  public setStyle ={
   color:"blue",
   fontStyle:"italic"
  }

}
