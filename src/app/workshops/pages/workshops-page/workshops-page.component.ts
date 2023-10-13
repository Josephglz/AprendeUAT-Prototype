import { Component } from '@angular/core';
import { Workshops } from 'src/app/shared/interfaces/Workshops';

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

  workshopsList: Workshops[] = [
    {
      title: 'ChatBOT en la enseñanza',
      description: 'Aprende a utilizar un chatbot para tu clase',
      resourcesLinks: [
        {
          title: '001 ChatBOT Presentación',
          path: 'https://alumnosuatedu-my.sharepoint.com/:v:/r/personal/coordsistfi_uat_edu_mx/Documents/talleres/CHatbootFI/001.-ChatBotPresentacion.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0RpcmVjdCJ9fQ&e=mMa2hP',
          author: 'Coordinación de la carrera de Ingeniería en sistemas computacionales',
          type: 'Video'
        }
      ]
    }
  ]
}
