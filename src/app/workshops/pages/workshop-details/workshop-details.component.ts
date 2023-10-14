import { Component } from '@angular/core';
import { WorkshopsService } from '../../services/workshops.service';
import { ActivatedRoute } from '@angular/router';
import { Workshops } from 'src/app/shared/interfaces/Workshops';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  templateUrl: './workshop-details.component.html'
})
export class WorkshopDetailsComponent {
  idx: number = 0;
  workshopInfo: Workshops = {} as Workshops;
  idResource: number = 0;
  collapseVideos: boolean = true;
  currentVideoSource: SafeResourceUrl = '';

  constructor(
    private _workshopService: WorkshopsService,
    private _routeData: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this._routeData.params.subscribe(params => {
      this.idx = +params['id'];
      this.workshopInfo = this._workshopService.getWorkshopById(this.idx)!;
    });
    this.currentVideoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.workshopInfo.resourcesLinks[this.idResource].path);
  }

  toggleCollapseVideos(): void {
    this.collapseVideos = !this.collapseVideos;
  }

  changeResourceIndex(index: number): void {
    this.idResource = index;
    this.currentVideoSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.workshopInfo.resourcesLinks[index].path)
  }
}
