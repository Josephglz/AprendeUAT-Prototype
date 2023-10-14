import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialsService } from '../../services/tutorials.service';
import { Tutorials } from 'src/app/shared/interfaces/Tutorials';

@Component({
  templateUrl: './tutorials-details.component.html'
})
export class TutorialsDetailsComponent {
  idx: number = 0;
  tutorialInfo: Tutorials = {} as Tutorials;

  constructor(
    private _routeData: ActivatedRoute,
    private _tutorialService: TutorialsService
  ) { }

  ngOnInit(): void {
    this._routeData.params.subscribe(params => {
      this.idx = +params['id'];
      this.tutorialInfo = this._tutorialService.getTutorialsById(this.idx)!;
    });
  }
}
