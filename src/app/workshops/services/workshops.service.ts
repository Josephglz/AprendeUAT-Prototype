import { Injectable } from '@angular/core';

import { Workshops } from 'src/app/shared/interfaces/Workshops';

@Injectable({
  providedIn: 'root'
})
export class WorkshopsService {
  private workshopsList: Workshops[] = [
    {
      id: 1,
      title: 'ChatBOT en la enseñanza',
      description: 'Aprende a utilizar un chatbot para tu clase',
      resourcesLinks: [
        {
          title: '001 ChatBOT Presentación',
          path: 'https://www.youtube.com/embed/CYtU-ebJFtM?si=VuRUjgn-7yBusTIa',
          author: 'Coordinación de la carrera de Ingeniería en sistemas computacionales',
          type: 'Video'
        },
        {
          title: '002 ChatBOT Crear cuenta',
          path: 'https://www.youtube.com/embed/c1f42BsA9xk?si=U0Au2rqf5zK2NgSk',
          author: 'Coordinación de la carrera de Ingeniería en sistemas computacionales',
          type: 'Video'
        }
      ]
    }
  ]

  constructor() { }

  public getWorkshopsList(): Workshops[] {
    return this.workshopsList;
  }

  public getWorkshopById(id: number): Workshops | undefined {
    return this.workshopsList.find(workshop => workshop.id === id);
  }

}
