import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workshops-card',
  templateUrl: './workshop-card.component.html'
})
export class WorkshopCardComponent {
  @Input() workshopInfo: any;
}
