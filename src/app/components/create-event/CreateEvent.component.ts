import {Component, OnInit} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {FormControl, FormGroup} from '@angular/forms';
import {EventService} from "../../services/event.service";
import {Event} from "../../shared/models/event.model";

@Component({
  selector: 'app-create-event',
  templateUrl: 'create-event.html'
})
export class CreateEventComponent implements OnInit {
  readonly SERVER_HOST = 'http://localhost:4200/';

  eventName: string;
  eventDates: Date[];
  places: string[] = [''];
  event:Event;
  link: string;

  formGroup: FormGroup;

  errorMessage:string;
  constructor(public createEventService: EventService){

  }

  addPlace() {
    this.places.push('');
  }

  generateLink() {
    const id = UUID.UUID();
    // save dto
    this.link = this.SERVER_HOST + 'event/' + id;
    let event:Event = {id: 2, name: "Awesome Service 2", "dates":[], "places":[]};
    this.createEventService.createEvent(event).subscribe(
        (data: Event) => this.event = data, // success path
        error =>
          this.errorMessage = error.error // error path
      );
  }

  ngOnInit(): void {
    this.setupFormControls();
  }

  private setupFormControls(): void {
    this.formGroup = new FormGroup({
      eventName: new FormControl({value: '', disabled: false})
    });
  }
}
