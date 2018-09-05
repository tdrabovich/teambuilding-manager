import {Component, Input} from '@angular/core';

@Component({
  selector: 'event-link-manager',
  templateUrl: 'event-link-manager.html'
})
export class EventLinkManagerComponent {

  @Input() link: string;
}
