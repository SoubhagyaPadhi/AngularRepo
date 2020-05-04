import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref-var',
  template: `<input #myInput type="text">
             <h2 [ngClass]="setStyleClass">{{message}}</h2>
             <button (click)=logMsg(myInput.value)>Click Me</button>
             <button (click)=logMsg(myInput)>Click</button>`,
  styles: [`.txt-danger{
    color:red;
    font-style:italic
  }
  .txt-special{
    color:blue;
    font-style:bold;
  }`]
})
export class TempRefVarComponent implements OnInit {

  public message = "";
  public isDanger = false;
  public setStyleClass = {
   "txt-danger":this.isDanger,
   "txt-special":!this.isDanger
  };
  constructor() { }

  ngOnInit() {
  }
  logMsg(val) {
    this.message = val;
    console.log(val);
  }

}
