import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  public starWidth: number;
  @Input() rating: number;
  @Output() starRatingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }

  ngOnChanges() {
    this.starWidth = 90 / 5 * this.rating;
  }

  onClick() {
    this.starRatingClicked.emit(`Kliknięty rating to: ${this.rating}`);
  }
}
