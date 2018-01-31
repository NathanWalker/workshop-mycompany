import { Component, OnInit, Inject } from '@angular/core';

import { WindowService, PlatformLanguageToken, ModalService } from '@mycompany/core';
import { SampleModal } from './sample-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _win: WindowService,
    private _modal: ModalService,
    @Inject(PlatformLanguageToken) private _lang: string
  ) {
    console.log('platformLanguage:', this._lang);
  }

  ngOnInit() {
  }

  public alert(msg: string) {
    this._win.alert(msg).then(_ => {
      console.log('alert dismissed.');
    });
  }

  public confirm(msg: string) {
    this._win.confirm(msg).then((confirmed) => {
      console.log('confirm:', confirmed);
    }, _ => {
      console.log('confirm canceled.');
    });
  }

  public openModal() {
    this._modal.open({
      cmpType: SampleModal
    });
  }

}
