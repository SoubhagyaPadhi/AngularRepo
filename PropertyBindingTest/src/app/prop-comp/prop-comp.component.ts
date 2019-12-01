import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-comp',
  template: `<input [id] = "myTestId1"  disabled = "{{isDisabled}}" type="text" value="SKP"/><br/><br/>
  <input [id] = "myTestId2"  [disabled] = "isDisabled" type="text" value="PKS"/>
  <h2 class="text-danger" [class]="textClass">!!TEXT!!</h2>
  <h2 [class.text-danger]="hasError">Danger</h2>
  <h2 [ngClass]="myClasses">My Class</h2>`,
  styles: [`.text-success{
            color:green;
             }
            .text-danger{
              color:red;
            }
            .text-warning{
              color:yellow;
            }`]
})
export class PropCompComponent implements OnInit {

  public myTestId1 = "1-MYTESTID";
  public myTestId2 = "2-MYTESTID";
  public isDisabled = false;
  public textClass = "text-warning";
  public hasError = true;
  public hasWarning = false;
  public myClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-warning":this.hasWarning
  };
  constructor() { }

  ngOnInit() {
  }

}
