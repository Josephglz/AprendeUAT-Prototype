import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherPagesComponent } from './pages/teacher-pages/teacher-pages.component';
import { TeacherCardComponent } from './components/teacher-card/teacher-card.component';



@NgModule({
  declarations: [
    TeacherPagesComponent,
    TeacherCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
