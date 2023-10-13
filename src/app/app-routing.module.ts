import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { TutorialsPageComponent } from './tutorials/pages/tutorials-page/tutorials-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'tutorias', component: TutorialsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
