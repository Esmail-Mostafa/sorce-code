import { Component, inject } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-cancel-dialog',

  templateUrl: './cancel-dialog.component.html',
  styleUrl: './cancel-dialog.component.scss',
})
export class CancelDialogComponent {
  private dialogConfig = inject(DynamicDialogConfig);
  ref: DynamicDialogRef = inject(DynamicDialogRef);
  data = this.dialogConfig.data;
  action() {
    this.ref.close({ action: 'action' });
  }

  cancel() {
    this.ref.close({ action: 'cancel' });
  }
}
