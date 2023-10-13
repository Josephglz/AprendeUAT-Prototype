import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialsPageComponent } from './pages/tutorials-page/tutorials-page.component';
import { TutorialCardComponent } from './components/tutorial-card/tutorial-card.component';
import { FormComponent } from './components/form/form.component';

import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TutorialsPageComponent,
    TutorialCardComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatDialogModule,
  ],
  exports: [
    TutorialsPageComponent
  ]
})
export class TutorialModule { }
