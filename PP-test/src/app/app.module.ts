import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MCRTopBarModule} from 'mcr-components'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MCRTopBarModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
