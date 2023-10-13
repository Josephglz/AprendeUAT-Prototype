import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsPageComponent } from './pages/tutorials-page/tutorials-page.component';
import { TutorialsCardComponent } from './components/tutorials-card/tutorials-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TutorialsPageComponent,
    TutorialsCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TutorialsPageComponent
  ]
})
export class TutorialsModule { }
