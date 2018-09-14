import {Component, ViewEncapsulation} from "@angular/core";


@Component({
    selector: 'my-grid',
    templateUrl: './grid.component.html'
})
export class GridComponent {
    columnDefs = [
        {headerName: 'First Name', field: 'fname' },
        {headerName: 'Last Name', field: 'lname' },
        {headerName: 'Age', field: 'age'}
    ];
    
    rowData = [
        { fname: 'Tom', lname: 'Celica', age: 35 },
        { fname: 'Ford', lname: 'Mondeo', age: 32 },
        { fname: 'barry', lname: 'Boxter', age: 72 }
    ];
}



