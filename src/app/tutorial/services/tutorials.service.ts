import { Injectable } from '@angular/core';
import { Tutorials } from 'src/app/shared/interfaces/Tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {
  tutorialsList:Tutorials[] = [
    {
      id: 1,
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
      id: 2,
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

  constructor() { }

  public getTutorialsList(): Tutorials[] {
    return this.tutorialsList
  }

  public getTutorialsById(id: number): Tutorials | undefined {
    return this.tutorialsList.find(tutorial => tutorial.id === id);
  }

}
