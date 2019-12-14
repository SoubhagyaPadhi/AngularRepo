import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  public name='Jonathan';
  public person={
    "name":"john",
    "age":25
  }
  public myDate = new Date();
  constructor() { }

  ngOnInit() {
  }

}
