import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface PlotParameter {
  position: number;
  monitoringParam: string;
  displayName: string;
  statisticalMethod: string;
  calculationArea: string;
  reference: string;
  Xplus: number | null;
  Xminus: number | null;
  k: number | null;
  column: number;
  creationdate: string;
}

const ELEMENT_DATA: PlotParameter[] = [
  {
    position: 1,
    monitoringParam: 'FNK',
    displayName: 'mean_refRef_201',
    statisticalMethod: 'arithmetical mean',
    calculationArea: 'reference',
    reference: 'Ref_2018(1)',
    Xplus: 3,
    Xminus: 4,
    k: 3,
    column: 1,
    creationdate: '18.06.2021',
  },
];

@Component({
  selector: 'mp-statistical-methods',
  templateUrl: './statistical-methods.component.html',
  styleUrls: ['./statistical-methods.component.scss'],
})
export class StatisticalMethodsComponent {
  displayedColumns: string[] = [
    'select',
    'monitoringParam',
    'displayName',
    'statisticalMethod',
    'calculationArea',
    'reference',
    'Xplus',
    'Xminus',
    'k',
    'column',
    'creationDate',
    'createNew',
    'addExisting',
  ];

  dataSource = new MatTableDataSource<PlotParameter>(ELEMENT_DATA);
  selection = new SelectionModel<PlotParameter>(true, []);

  constructor() {}

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
      row.position + 1
    }`;
  }
}
