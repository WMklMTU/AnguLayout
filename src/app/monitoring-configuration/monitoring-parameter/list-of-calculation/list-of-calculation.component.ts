import { Component, OnInit } from '@angular/core';

export interface CalculationParameter {
  parameter: string;
  unit: string;
  description: string;
  revision: number;
}

const ELEMENT_DATA: CalculationParameter[] = [
  { parameter: 'Alfa', unit: '-', description: 'Alfa parameter', revision: 3 },
  { parameter: 'Beta', unit: '-', description: 'Beta parameter', revision: 2 },
  { parameter: 'Gamma', unit: 'g', description: 'Gamma parameter', revision: 1 },
  { parameter: 'Delta', unit: '-', description: 'Pressure Correction Factor', revision: 1 },
  { parameter: 'Delta', unit: '-', description: 'Pressure Correction Factor', revision: 1 },
  { parameter: 'Delta', unit: '-', description: 'Pressure Correction Factor', revision: 1 },
  { parameter: 'Delta', unit: '-', description: 'Pressure Correction Factor', revision: 1 },
];

@Component({
  selector: 'mp-list-of-calculation',
  templateUrl: './list-of-calculation.component.html',
  styleUrls: ['./list-of-calculation.component.scss'],
})
export class ListOfCalculationComponent implements OnInit {
  displayedColumns: string[] = ['parameter', 'unit', 'description', 'revision'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
