import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';


@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent implements OnInit {

  public empList = [];
  constructor(private _emplServ:EmployeeServiceService) { }

  ngOnInit() {
    this.empList = this._emplServ.getEmployees();
  }

}
