import { Component } from '@angular/core';

import { Tutorials } from 'src/app/shared/interfaces/Tutorials';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from '../../components/form/form.component';

@Component({
  templateUrl: './tutorials-page.component.html'
})
export class TutorialsPageComponent {
  filterCollapse: boolean = false;
  filterCareers: boolean = true;
  filterSubjects: boolean = true;

  constructor(
    public dialogRef: MatDialog
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
