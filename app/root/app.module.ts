import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeriodicTable } from '../periodic-table/periodic-table.component';
import { BohrModel } from '../bohr-model/bohr-model.component';

@NgModule({
declarations: [
    AppComponent,
    PeriodicTable,
    BohrModel
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
