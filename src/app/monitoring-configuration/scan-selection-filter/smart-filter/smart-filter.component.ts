import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MAT_PAGINATOR_INTL_PROVIDER_FACTORY} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'mp-ssf-smart-filter',
  templateUrl: './smart-filter.component.html',
  styleUrls: ['./smart-filter.component.scss']
})
export class SmartFilterComponent implements AfterViewInit {
  displayedColumns: string[] = ['serialnumber', 'testdate', 'scan', 'filter1', 'filter2', 'filter3', 'filter4', 'filter5', 'filter6'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  serialnumber: number;
  WBSelement:string;
  testdate: string;
  scantime:string;
  scannumber: number;
  scancode: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    serialnumber: 1,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 2,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 3,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 5,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 7,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 8,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 19,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 21,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 22,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 24,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 30,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 31,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 32,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 33,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 45,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },
  {
    serialnumber: 47,
    WBSelement: 'XYZWBS09234',
    testdate: '05.10.2010',
    scantime: '10:37:12',
    scannumber: 24,
    scancode: 'PERX23'
  },

];
