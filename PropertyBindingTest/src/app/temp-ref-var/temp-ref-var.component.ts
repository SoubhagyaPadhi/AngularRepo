import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref-var',
  template: `<input #myInput type="text">
             <button (click)=logMsg(myInput.value)>Click Me</button>
             <button (click)=logMsg(myInput)>Click</button>`,
  styleUrls: ['./temp-ref-var.component.css']
})
export class TempRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logMsg(val) {
    console.log(val);
  }

}
