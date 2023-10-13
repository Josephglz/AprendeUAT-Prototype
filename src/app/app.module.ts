import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from '@coreui/angular';

import { SharedModule } from './shared/shared.module';
import { TutorialsModule } from './tutorials/tutorials.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';

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
    TutorialsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
