import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'mp-rating-correction',
  templateUrl: './rating-correction.component.html',
  styleUrls: ['./rating-correction.component.scss']
})

export class RatingCorrectionComponent implements OnInit {

  settingsIsShown: boolean;

  constructor() {
    this.settingsIsShown = false;
  }

  toggleSettingsIsShown()
  {
    this.settingsIsShown = true;
  }

  toggleSettingsIsNotShown()
  {
    this.settingsIsShown = false;
  }

  ngOnInit(): void {
  }

}
