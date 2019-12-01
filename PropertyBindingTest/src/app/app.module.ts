import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PropCompComponent } from './prop-comp/prop-comp.component';
import { StyleBindComponent } from './style-bind/style-bind.component';
import { EvenBindComponent } from './even-bind/even-bind.component';
import { TempRefVarComponent } from './temp-ref-var/temp-ref-var.component';
import { TwoWayBindComponent } from './two-way-bind/two-way-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    PropCompComponent,
    StyleBindComponent,
    EvenBindComponent,
    TempRefVarComponent,
    TwoWayBindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
