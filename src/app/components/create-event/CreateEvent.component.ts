import {Component, OnInit} from '@angular/core';
import {UUID} from 'angular2-uuid';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: 'create-event.html'
})
export class CreateEventComponent implements OnInit {

  readonly SERVER_HOST = 'http://localhost:4200/';

  eventName: string;
  eventDates: Date[];
  places: string[] = [''];

  link: string;

  formGroup: FormGroup;


  addPlace() {
    this.places.push('');
  }

  generateLink() {
    const id = UUID.UUID();
    // save dto
    this.link = this.SERVER_HOST + 'event/' + id;
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
