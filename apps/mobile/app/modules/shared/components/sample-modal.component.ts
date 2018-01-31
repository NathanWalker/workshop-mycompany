import { Component } from '@angular/core';
import { ModalService, SampleModalBase } from '@mycompany/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';

@Component({
  moduleId: module.id,
  selector: 'ns-sample-modal',
  templateUrl: './sample-modal.component.html'
})
export class SampleModal extends SampleModalBase {

  public title: string;

  constructor(
    public _modal: ModalService,
    private _params: ModalDialogParams,
  ) {
    super(_modal);
    this.title = this._params.context.title;
  }

  public close(value?: boolean) {
    super.close({ value, params: this._params });
  }
}
