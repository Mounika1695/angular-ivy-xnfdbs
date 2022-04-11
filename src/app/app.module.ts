import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaugeModule } from 'angular-gauge/gauge.module';
import { MatFormFieldModule } from '@angular/material/form-field/form-field-module';
import { MatSelectModule } from '@angular/material/select/select-module';
import { AppRoutingModule } from './app-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [AppComponent, SearchBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
