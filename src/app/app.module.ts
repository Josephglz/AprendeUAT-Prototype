import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from '@coreui/angular';

import { SharedModule } from './shared/shared.module';
import { WorkshopsModule } from './workshops/workshops.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TutorialModule } from './tutorial/tutorial.module';
import { TeacherModule } from './teacher/teacher.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,

    CarouselModule,

    SharedModule,
    WorkshopsModule,
    TutorialModule,
    TeacherModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
