import { Component } from '@angular/core';
import { ModalService } from '@mycompany/core';

@Component({
  selector: 'ns-sample-modal',
  templateUrl: './sample-modal.component.html'
})
export class SampleModal {

  constructor(private _modal: ModalService) {

  }
  public close(value?: boolean) {
    this._modal.close({ value });
  }
}
