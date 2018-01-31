import { Component } from '@angular/core';
import { ModalService, SampleModalBase } from '@mycompany/core';

@Component({
  selector: 'ns-sample-modal',
  templateUrl: './sample-modal.component.html'
})
export class SampleModal extends SampleModalBase {

  constructor(public _modal: ModalService) {
    super(_modal);
  }
}
