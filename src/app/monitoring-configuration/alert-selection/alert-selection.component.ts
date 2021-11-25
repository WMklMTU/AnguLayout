import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface PlotParameter {
  alertID: number;
  monitoringParam: string;
  statisticalMethod: string;
  borderMean: string;
  alertRules: string;
  warning: number;
  yellowLimit: number;
  redLimit: number;
  creationDate: string;
}

const ELEMENT_DATA: PlotParameter[] = [
  {
    alertID: 1,
    monitoringParam: 'FNK',
    statisticalMethod: 'arithmetical mean',
    borderMean: 'StDev_refRef_201',
    alertRules: 'lower control limit',
    warning: 3,
    yellowLimit: 1.2,
    redLimit: 1.5,
    creationDate: '18.06.2021',
  },
  {
    alertID: 2,
    monitoringParam: 'FNK',
    statisticalMethod: 'arithmetical mean',
    borderMean: 'StDev_refRef_201',
    alertRules: 'lower control limit',
    warning: 3,
    yellowLimit: 1.2,
    redLimit: 1.5,
    creationDate: '18.06.2021',
  },
  {
    alertID: 3,
    monitoringParam: 'FNK',
    statisticalMethod: 'arithmetical mean',
    borderMean: 'StDev_refRef_201',
    alertRules: 'lower control limit',
    warning: 3,
    yellowLimit: 1.2,
    redLimit: 1.5,
    creationDate: '18.06.2021',
  },
  {
    alertID: 4,
    monitoringParam: 'FNK',
    statisticalMethod: 'arithmetical mean',
    borderMean: 'StDev_refRef_201',
    alertRules: 'lower control limit',
    warning: 3,
    yellowLimit: 1.2,
    redLimit: 1.5,
    creationDate: '18.06.2021',
  },
];

@Component({
  selector: 'mp-alert-selection',
  templateUrl: './alert-selection.component.html',
  styleUrls: ['./alert-selection.component.scss'],
})
export class AlertSelectionComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'alert-id',
    'monitoringParam',
    'statisticalMethod',
    'border-mean',
    'alert-rules',
    'warning',
    'yellow-limit',
    'red-limit',
    'creation-date',
    'edit',
    'remove',
  ];

  dataSource = new MatTableDataSource<PlotParameter>(ELEMENT_DATA);
  selection = new SelectionModel<PlotParameter>(true, []);

  constructor() {}

  ngOnInit(): void {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PlotParameter): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.alertID + 1
    }`;
  }
}
