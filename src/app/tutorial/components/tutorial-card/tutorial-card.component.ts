import { Component, Input } from '@angular/core';
import { Tutorials } from 'src/app/shared/interfaces/Tutorials';

@Component({
  selector: 'app-tutorial-card',
  templateUrl: './tutorial-card.component.html'
})
export class TutorialCardComponent {
  @Input()
  TutorialInfo: Tutorials = {} as Tutorials;

}
