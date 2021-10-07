import { Component, OnInit } from '@angular/core';

export interface RevisionParameters {
  id: string;
  date: string;
  author: string;
  comment: string;
}

const ELEMENT_DATA: RevisionParameters[] = [
  { id: '1', date: '18.06.2021', author: 'TH', comment: 'Comment 1' },
  { id: '2', date: '22.06.2021', author: 'AN', comment: 'Comment 2' },
];

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'author', 'comment'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
