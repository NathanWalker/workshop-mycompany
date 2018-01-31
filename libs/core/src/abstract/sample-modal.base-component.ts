import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

export abstract class SampleModalBase {

  constructor(public _modal: ModalService) {

  }

  public close(value?: any) {
    this._modal.close(value);
  }
}
