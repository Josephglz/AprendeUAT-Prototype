import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopsPageComponent } from './pages/workshops-page/workshops-page.component';
import { WorkshopCardComponent } from './components/workshops-card/workshop-card.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    WorkshopsPageComponent,
    WorkshopCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WorkshopsPageComponent
  ]
})
export class WorkshopsModule { }
