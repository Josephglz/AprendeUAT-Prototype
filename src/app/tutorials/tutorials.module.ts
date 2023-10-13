import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialsPageComponent } from './pages/tutorials-page/tutorials-page.component';



@NgModule({
  declarations: [
    TutorialsPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TutorialsPageComponent
  ]
})
export class TutorialsModule { }
