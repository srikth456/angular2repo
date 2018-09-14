import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

  export interface PeriodicElement {
    firstName: string;
    lastName: string;
    age: number;
  }
  const elementData: PeriodicElement[] = [
    {firstName: 'Sam', lastName: 'Jason', age: 25},
    {firstName: 'John', lastName:'Cena', age: 26},
    {firstName: 'Larry', lastName: 'Will', age: 27},
    {firstName: 'Bery', lastName: 'Jack', age: 18},
    {firstName: 'Boron', lastName: 'Jackson', age: 52},
    {firstName: 'Carb', lastName:'Will', age: 45},
    {firstName: 'Nike', lastName: 'Carl', age: 23},
    {firstName: 'Ben', lastName: 'Garry', age: 45},
    {firstName: 'Frank', lastName: 'Newton', age: 20},
    {firstName: 'Neon', lastName: 'Gill', age: 25}
  ];

@Component({
    selector: 'data-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['dialog.component.css'],
  })
  
export class DialogComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA)
    public data,public dialogRef: MatDialogRef<DialogComponent>) {} 
    displayedColumns: string[] = ['firstName', 'lastName', 'age'];   
    dataSource =  new MatTableDataSource(elementData);;
    ngOnInit() { 
        // filte the values of table
        this.dataSource.filter = this.data;
     }
    close() {
        this.dialogRef.close();
    }
   
}