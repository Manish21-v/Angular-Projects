import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Import http module for using backedn API's
import { HttpClientModule } from '@angular/common/http';
//Import FormsModule to use different types of forms implementation
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchprofileComponent } from './searchprofile/searchprofile.component';
import { SearchhistoryComponent } from './searchhistory/searchhistory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchprofileComponent,
    SearchhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
