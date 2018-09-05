import {Injectable} from '@angular/core';
import {Event} from "../shared/models/event.model";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  readonly DB_URL = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {
  }

  createEvent(createEvent: Event) {
    return this.http.post(this.DB_URL, createEvent);
  }

  getEvent(id: number) {
    return this.http.get(this.DB_URL + id);
  }
}

