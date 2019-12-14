import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCompComponent } from './test-comp/test-comp.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent,
    PipeTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
