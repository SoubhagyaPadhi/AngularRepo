import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  getEmployees(){
    return [
      {"name":"John","age":25,"email":"john123@gmail.com"},
      {"name":"Andrew","age":30,"email":"andre123@gmail.com"}
    ];
  }
}
