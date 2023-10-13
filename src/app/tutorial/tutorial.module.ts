import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsPageComponent } from './pages/tutorials-page/tutorials-page.component';
import { TutorialCardComponent } from './components/tutorial-card/tutorial-card.component';



@NgModule({
  declarations: [
    TutorialsPageComponent,
    TutorialCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TutorialsPageComponent
  ]
})
export class TutorialModule { }
