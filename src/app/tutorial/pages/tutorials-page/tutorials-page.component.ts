import { Component } from '@angular/core';
import { Tutorials } from 'src/app/shared/interfaces/Tutorials';

@Component({
  templateUrl: './tutorials-page.component.html'
})
export class TutorialsPageComponent {
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



  tutorialsList:Tutorials[] = [
    {
      author: 'Gonzalez Cabrales Joseph Ian',
      title: '¿Qué son las sentencias condicionales?',
      description: '¿Qué es una sentencia? ¿Qué es una condicional? ¿Qué es una sentencia condicional?',
      sinceTime: 3,
      tags: [
        {
          name: 'Programación'
        },
        {
          name: 'Conceptos básicos'
        },
        {
          name: 'Aprender a programar'
        }
      ],
      answers: 3
    },
    {
      author: 'Hernandez García Carlos de Jesus',
      title: '¿Cómo instalo PSEINT?',
      description: '¿Cómo puedo instalar PSEINT en mi computadora?',
      sinceTime: 2,
      tags: [
        {
          name: 'PSEINT'
        },
        {
          name: 'Instalación'
        },
        {
          name: 'Algoritmos'
        }
      ],
      answers: 1
    }
  ]
}
