import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-bind',
  template: `<button (click)=onClick()>Click Me</button>
  <h2 [ngStyle]="setStyle">{{greetMsg}}</h2>
  <button (click)=onClickEvent($event)>Event Click</button><br/><br/>
  <button (click)="greetMsg = 'Welcome Button Click!!'">Inline Click</button>`,
  styleUrls: ['./even-bind.component.css']
})
export class EvenBindComponent implements OnInit {

  public greetMsg = "";
  public eventType = "";
  public setStyle = {
    color:"red",
    fontStyle:"italic"
  };
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.greetMsg = "Welcome SKP!!";
    console.log('Welcome SKP!!');
}
onClickEvent(val){
  //this.greetMsg = val;
  this.eventType = val.type;
  this.greetMsg = this.eventType;
}

}
