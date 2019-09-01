import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss'],
})
export class MastheadComponent implements OnInit {
  @Input() mastheadData: any;
  constructor() { }

  ngOnInit() {
    if (!this.mastheadData.backgroundImage) {
      this.mastheadData.backgroundImage = 'http://lorempixel.com/abstract/1500/1000';
    }
  }
}
