 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { AppService } from './AppService';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
    
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
     AppService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 