import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { counter } from './counter.service';
import { counterHandler } from './counterhandler.component';

@NgModule({
  declarations: [
    AppComponent,counterHandler
  ],
  imports: [
    BrowserModule
  ],
  providers: [counter],
  bootstrap: [AppComponent]
})
export class AppModule { }
