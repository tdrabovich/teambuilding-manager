import {UUID} from "angular2-uuid";

export class Event {
  id: UUID;
  name: string;
  dates: string[];
  places: string[];
}
