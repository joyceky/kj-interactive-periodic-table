import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PeriodicTable } from '../periodic-table/periodic-table.component';
import { BohrModel } from '../bohr-model/bohr-model.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  bootstrap: [
    AppComponent,
    PeriodicTable,
    BohrModel
  ],
  declarations: [
    AppComponent,
    PeriodicTable,
    BohrModel
  ]
})
export class AppModule {}
