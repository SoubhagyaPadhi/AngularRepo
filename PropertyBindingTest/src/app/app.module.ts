import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropCompComponent } from './prop-comp/prop-comp.component';
import { StyleBindComponent } from './style-bind/style-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    PropCompComponent,
    StyleBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
