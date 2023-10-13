import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  constructor(
    public dialog: MatDialog
  ) {}

  closeDialog(): void {
    this.dialog.closeAll();
  }

  submitForm(): void {
    //TODO: Save form data
    this.closeDialog();
  }
}
