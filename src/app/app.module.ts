import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { MatTableModule } from '@angular/material';
import {MatButtonModule, MatCheckboxModule,MatDialogModule} from '@angular/material';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import {GridComponent} from './grid/grid.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    AgGridModule.withComponents([])
  ],
  exports:[MatButtonModule,
    MatCheckboxModule,MatTableModule, MatDialogModule],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
