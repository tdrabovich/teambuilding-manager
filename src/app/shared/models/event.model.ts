import {UUID} from "angular2-uuid";

export class Event {
  id: UUID;
  name: string;
  dates: Date[];
  places: string[];

  constructor(id: string, name: string, dates: Date[], places: string[]) {
    this.id = id;
    this.name = name;
    this.dates = dates;
    this.places = places;
  }
}
