import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IfTestComponent } from './if-test/if-test.component';
import { SwitchTestComponent } from './switch-test/switch-test.component';
import { ForTestComponent } from './for-test/for-test.component';

@NgModule({
  declarations: [
    AppComponent,
    IfTestComponent,
    SwitchTestComponent,
    ForTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
