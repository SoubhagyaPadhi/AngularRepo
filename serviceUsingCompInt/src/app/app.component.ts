import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'serviceUsingCompInt';
  public emplArr=[
    {"name":"John","age":25,"email":"john123@gmail.com"},
    {"name":"Andrew","age":30,"email":"andre123@gmail.com"}
  ];
  public childArr =[];
}
