import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkshopsPageComponent } from './pages/workshops-page/workshops-page.component';
import { WorkshopCardComponent } from './components/workshops-card/workshop-card.component';

import { RouterModule } from '@angular/router';
import { WorkshopDetailsComponent } from './pages/workshop-details/workshop-details.component';

@NgModule({
  declarations: [
    WorkshopsPageComponent,
    WorkshopCardComponent,
    WorkshopDetailsComponent
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
