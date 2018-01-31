import { Injectable } from '@angular/core';
import { isObject } from '../helpers';

@Injectable()
export class PlatformModal {
  public open(opts: any, modalOpts: any) { }
}

@Injectable()
export class ModalService {

  private _modalRef: any;

  constructor(private _modal: PlatformModal) {

  }

  public open(opts: { cmpType: any, modalOptions?: any }) {
    this._modalRef = this._modal.open(opts.cmpType, opts.modalOptions);

    if (this._modalRef) {
      if (this._modalRef.afterClosed) {
        // likely @angular/material (web)
        this._modalRef.afterClosed().subscribe((result: any) => {
          console.log('Modal closed with:', result);
        }, (reason: any) => {
          console.log('Modal closed reason:', reason);
        });
      } else if (this._modalRef.then) {
        // like {N} (mobile)
        this._modalRef.then(result => {
          console.log('Native modal closed with:', result);
        });
      }
    }
  }

  public close(result: { value?: any; params?: any }) {
    if (this._modalRef) {
      if (this._modalRef.close) {
        this._modalRef.close(isObject(result) ? result.value : result);
      } else if (this._modalRef.then && isObject(result)) {
        result.params.closeCallback(result ? result.value : null);
      }
    }
  }
}