import { Component } from '@angular/core';

@Component({
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  isCollapsed: boolean[] = [true, false, false, false];

  constructor() { }

  toggleCollapse(idx: number): void {
    this.isCollapsed = this.isCollapsed.map(v => false);
    this.isCollapsed[idx] = !this.isCollapsed[idx];
  }
}
