import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-test',
  template: `<div *ngFor="let color of forTestArr;index as i">
  <h2>{{i}}--{{color}}</h2></div><br/><br/>
  <div *ngFor="let color of forTestArr;first as f">
  <h2>{{f}}--{{color}}</h2></div><br/><br/>
  <div *ngFor="let color of forTestArr;last as l">
  <h2>{{l}}-{{color}}</h2></div>
  <br/><br/>
  <div *ngFor="let color of forTestArr;odd as o">
  <h2>{{o}}-{{color}}</h2></div><br/><br/>
  <div *ngFor="let color of forTestArr;even as e">
  <h2>{{e}}-{{color}}</h2></div>`,
  styles: []
})
export class ForTestComponent implements OnInit {

  public forTestArr=["red","green","yellow","black"];
  constructor() { }

  ngOnInit() {
  }

}
