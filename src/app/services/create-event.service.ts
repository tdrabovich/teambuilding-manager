import {Injectable} from '@angular/core';
import {CreateEvent} from "../shared/models/create-event.model";
import {RequestOptions} from "https";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreateEventService {
  static url = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {
  }

  createEvent(createEvent: CreateEvent) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(url, createEvent, options);
  }

  getEvent(id: number): CreateEvent {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.get(url + id);
  }

}

