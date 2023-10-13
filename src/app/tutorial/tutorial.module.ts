import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsPageComponent } from './pages/tutorials-page/tutorials-page.component';
import { TutorialCardComponent } from './components/tutorial-card/tutorial-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TutorialsPageComponent,
    TutorialCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TutorialsPageComponent
  ]
})
export class TutorialModule { }
