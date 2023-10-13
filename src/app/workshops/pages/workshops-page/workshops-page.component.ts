import { Component } from '@angular/core';

@Component({
  selector: 'app-workshops-page',
  templateUrl: './workshops-page.component.html'
})
export class WorkshopsPageComponent {
  filterCollapse: boolean = false;
  filterCareers: boolean = true;
  filterSubjects: boolean = true;

  toggleFilterCollapse() {
    this.filterCollapse = !this.filterCollapse;
  }

  toggleFilterCareers() {
    this.filterCareers = !this.filterCareers;
  }

  toggleFilterSubjects() {
    this.filterSubjects = !this.filterSubjects;
  }
}
