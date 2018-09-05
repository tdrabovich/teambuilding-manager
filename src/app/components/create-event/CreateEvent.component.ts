import {Component, OnInit} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {FormControl, FormGroup} from '@angular/forms';
import {EventService} from '../../services/event.service';
import {Event} from '../../shared/models/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: 'create-event.html'
})
export class CreateEventComponent implements OnInit {
  readonly SERVER_HOST = 'http://localhost:4200/';

  eventName = new FormControl({});
  eventDates: Date[] = [];
  places: string[] = [''];
  event: Event;
  link: string;

  formGroup: FormGroup;

  errorMessage: string;
  constructor(public eventService: EventService) {
  }


  placeNumber = 0;
  dateNumber = 0;

  setEventName(event) {
    this.eventName = event.target.value;
  }

  addPlace() {
    this.places.push('');
    const placeFormControl = new FormControl({value: '', disabled: false});
    const name = 'place_' + this.placeNumber;
    this.placeNumber ++;
    this.formGroup.addControl(name, placeFormControl);
  }

  addDate() {
    this.eventDates.push(new Date());
    const dateFormControl = new FormControl({value: new Date(), disabled: false});
    const name = 'date_' + this.dateNumber;
    this.dateNumber ++;
    this.formGroup.addControl(name, dateFormControl);
  }

  setDate(date, event) {
    const index = this.eventDates.findIndex(date);
    this.eventDates[index] = event.target.valueAsDate;
  }

  setPlace(place, event) {
    const index = this.places.findIndex(place);
    this.places[index] = event.target.valueAsDate;
  }

  generateLink() {
    const id: string = UUID.UUID().toString();
    const eventData = this.formGroup.value;
    const event = new Event(id, eventData.eventName, this.eventDates, this.places);
    this.eventService.createEvent(event)
      .toPromise()
      .then((result) => {
        this.saveLink(event);
        this.errorMessage = null;
      })
      .catch((error) => {
        this.errorMessage = 'Error on save event. Details: ' + error.statusText;
      });
  }

  saveLink(event: Event) {
    this.link = this.SERVER_HOST + 'event/' + event.id;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      eventName: new FormControl({value: '', disabled: false})
    });
  }
}
