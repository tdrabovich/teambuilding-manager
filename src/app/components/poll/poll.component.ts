import {Component} from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: 'poll.html'
})
export class PollComponent {

  dates: Date[];
  places: string[];

  constructor() {
    this.dates = [new Date(), new Date()];
    this.places = ['first', 'second'];
  }
}
