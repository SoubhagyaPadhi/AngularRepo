import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropCompComponent } from './prop-comp/prop-comp.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { EvenBindComponent } from './even-bind/even-bind.component';
import { TempRefVarComponent } from './temp-ref-var/temp-ref-var.component';

@NgModule({
  declarations: [
    AppComponent,
    PropCompComponent,
    StyleBindComponent,
    EvenBindComponent,
    TempRefVarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
