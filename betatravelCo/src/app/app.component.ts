import { Component } from '@angular/core';
import {SelectItem} from 'primeng/api';
import {SelectItemGroup} from 'primeng/api';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'betatravelCo';
  selectedCity: string;

    groupedCities: SelectItemGroup[];
    items3: MenuItem[];
    dropDIcon = "fa fa-rocket";
    flightTableData = [];

    constructor() {
        this.groupedCities = [
            {
                label: 'India', 
                items: [
                    {label: 'Delhi - Indira Gandhi International Airport ', value: 'Delhi'},
                    {label: 'Goa - Dabolim Airport', value: 'Goa'},
                    {label: 'Bengaluru - Kempegowda International Airport', value: 'Bengaluru'}
                ]
            }
            
        ];
        this.items3 = [
            {label: 'Flights', icon: 'fa fa-plane', routerLink:'flights'},
            {label: 'Hotels', icon: 'fa fa-bed', routerLink:'hotels'},
            {label: 'Trains', icon: 'fa fa-train', routerLink:'trains'},
            {label: 'Bus', icon: 'fa fa-bus', routerLink:'bus'},
            {label: 'Cab', icon: 'fa fa-cab', routerLink:'cab'},
         ];
         this.flightTableData = [
            {flightName: 'IndiGo', departure: '15:55', arrival: '00:05', duration: '08hrs 10mins', price:'6955' },
            {flightName: 'AirAsia', departure: '21:45', arrival: '00:25',  duration: '02hrs 40mins',price:'7035' },
            {flightName: 'SpiceJet', departure: '04:55', arrival: '07:40', duration: '02hrs 45mins', price:'7050' },
            {flightName: 'Go Air', departure: '05:50', arrival: '08:40', duration: '02hrs 50mins', price:'7085' },
            {flightName: 'AirIndia', departure: '03:05', arrival: '05:55', duration: '02hrs 50mins', price:'7408' },
            {flightName: 'Vistara', departure: '03:06', arrival: '05:56', duration: '02hrs 50mins', price:'7408' }
         ];
    }
}
