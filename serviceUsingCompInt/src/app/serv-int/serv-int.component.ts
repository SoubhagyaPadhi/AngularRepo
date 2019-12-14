import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serv-int',
  templateUrl: './serv-int.component.html',
  styleUrls: ['./serv-int.component.css']
})
export class ServIntComponent implements OnInit {

  constructor() { }
  @Input('parentNodeVal') public empArrFromParent;

  ngOnInit() {
  }

}
