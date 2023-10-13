import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorkshopsPageComponent } from './workshops/pages/workshops-page/workshops-page.component';
import { TutorialsPageComponent } from './tutorial/pages/tutorials-page/tutorials-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'talleres', component: WorkshopsPageComponent},
  { path: 'tutorias', component: TutorialsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
