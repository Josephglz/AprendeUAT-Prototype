import { Component } from '@angular/core';
import { WorkshopsService } from '../../services/workshops.service';
import { ActivatedRoute } from '@angular/router';
import { Workshops } from 'src/app/shared/interfaces/Workshops';

@Component({
  templateUrl: './workshop-details.component.html'
})
export class WorkshopDetailsComponent {
  idx: number = 0;
  workshopInfo: Workshops = {} as Workshops;
  idResource: number = 0;
  collapseVideos: boolean = true;
  currentVideoSource: string = '';

  constructor(
    private _workshopService: WorkshopsService,
    private _routeData: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._routeData.params.subscribe(params => {
      this.idx = +params['id']; // Parse to number
      this.workshopInfo = this._workshopService.getWorkshopById(this.idx)!;
    });
    this.currentVideoSource = this.workshopInfo.resourcesLinks[0].path;
  }

  toggleCollapseVideos(): void {
    this.collapseVideos = !this.collapseVideos;
  }

  changeResourceIndex(index: number): void {
    this.idResource = index;
    this.currentVideoSource = this.workshopInfo.resourcesLinks[index].path;
  }
}
