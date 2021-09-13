import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormdemoComponent,
    FormvalidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
