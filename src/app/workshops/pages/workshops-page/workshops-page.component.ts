import { Component } from '@angular/core';
import { Workshops } from 'src/app/shared/interfaces/Workshops';

import { WorkshopsService } from '../../services/workshops.service';

@Component({
  selector: 'app-workshops-page',
  templateUrl: './workshops-page.component.html'
})
export class WorkshopsPageComponent {
  filterCollapse: boolean = false;
  filterCareers: boolean = true;
  filterSubjects: boolean = true;
  workshopsList: Workshops[] = this._workshopService.getWorkshopsList();

  constructor(
    private _workshopService: WorkshopsService
  ) {}

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
