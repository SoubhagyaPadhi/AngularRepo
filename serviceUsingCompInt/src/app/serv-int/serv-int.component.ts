import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-serv-int',
  templateUrl: './serv-int.component.html',
  styleUrls: ['./serv-int.component.css']
})
export class ServIntComponent implements OnInit {

  constructor() { }
  @Input('parentNodeVal') public empArrFromParent;
  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit([{"name":"Child1","age":25,"email":"child1@gmail.com"},
    {"name":"Child2","age":30,"email":"child2@gmail.com"}]);
  }

  ngOnInit() {
  }

}
