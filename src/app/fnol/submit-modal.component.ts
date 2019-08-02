import { Component, Inject } from '@angular/core';
import { ModalRef, MODAL_DATA } from 'dlg-angular-components';

@Component({
  selector: 'app-submit-modal-content',
  templateUrl: './submit-modal.component.html',
})
export class SubmitModalComponent {

  constructor(
    @Inject(MODAL_DATA) public data: any,
    public modalRef: ModalRef
  ) { }

  onClose() {
    this.modalRef.close('Closing');
  }
}
