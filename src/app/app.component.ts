import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';
import {GridComponent} from './grid/grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lname: string = '';
  showGrid:boolean= false;
  constructor(public dialog:MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
      data:this.lname
    });
  }

  openGrid(){
    this.showGrid = true;
  }
}
