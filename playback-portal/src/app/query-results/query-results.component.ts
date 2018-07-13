import {Component} from '@angular/core';

import {GridOptions} from 'ag-grid';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'pbp-query-results',
  templateUrl: './query-results.component.html',
  styleUrls: ['./query-results.component.scss']
})
export class QueryResultsComponent {

  date = new DatePipe('en').transform(new Date('2018-07-12T00:00:00Z'), 'short');

  gridApi;
  domLayout;

  gridHeaders = [
    {headerName: 'SEGMENT ID', field: 'Segment_Id'},
    {headerName: 'SEGMENT START TIME', field: 'Segment_Start_Time'},
    {headerName: 'SEGMENT STOP TIME', field: 'Segment_Stop_Time'},
    {headerName: 'DURATION', field: 'Duration'},
    {headerName: 'FIRST NAME', field: 'First_Name'},
    {headerName: 'LAST NAME', field: 'Last_Name'}
  ];

  gridOptions: GridOptions = {
    domLayout: 'autoHeight',
    rowSelection: 'multiple',
    debug: true,
    onGridReady: this.onGridReady.bind(this),
  };

  queryData = [
    {
      Segment_Id: 336975428,
      Segment_Start_Time: this.date,
      Segment_Stop_Time: this.date,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 4654646545858,
      Segment_Start_Time: this.date,
      Segment_Stop_Time: this.date,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 35654673,
      Segment_Start_Time: this.date,
      Segment_Stop_Time: this.date,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 7726772,
      Segment_Start_Time: this.date,
      Segment_Stop_Time: this.date,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 784336575,
      Segment_Start_Time: this.date,
      Segment_Stop_Time: this.date,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    },
    {
      Segment_Id: 68794168756487,
      Segment_Start_Time: this.date,
      Segment_Stop_Time: this.date,
      Duration: '0:00:17',
      First_Name: 'John',
      Last_Name: 'Doe'
    }
  ];

  constructor() {}

  private onGridReady (params) {
    this.gridApi = params.api;
    return this.gridApi.sizeColumnsToFit();
  }

}
