import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  showCollapseMenu: boolean = false;
  idxSection: number = 0;

  toggleMenu() {
    this.showCollapseMenu = !this.showCollapseMenu;
  }

  setIdxSection(idx: number) {
    this.idxSection = idx;
  }
}
