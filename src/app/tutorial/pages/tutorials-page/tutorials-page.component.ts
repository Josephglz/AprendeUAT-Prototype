import { Component } from '@angular/core';

import { Tutorials } from 'src/app/shared/interfaces/Tutorials';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from '../../components/form/form.component';
import { TutorialsService } from '../../services/tutorials.service';

@Component({
  templateUrl: './tutorials-page.component.html'
})
export class TutorialsPageComponent {
  filterCollapse: boolean = false;
  filterCareers: boolean = true;
  filterSubjects: boolean = true;

  tutorialsList: Tutorials[] = this._tutorialService.getTutorialsList();

  constructor(
    public dialogRef: MatDialog,
    private _tutorialService: TutorialsService
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


  openDialog(): void {
    const dialogRef = this.dialogRef.open(FormComponent, {
      width: '700px',
    })
    dialogRef.afterClosed().subscribe(result => {
    })
  }
}
