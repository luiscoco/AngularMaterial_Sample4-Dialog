import { Component } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDialogTitle } from '@angular/material/dialog';
import { MatDialogActions} from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-content-example-dialog',
  standalone: true,
  imports: [MatDialogContent,
            MatDialogTitle,
            MatDialogActions,
            MatDialogClose],
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrl: './dialog-content-example-dialog.component.css',
})
export class DialogContentExampleDialogComponent {}
